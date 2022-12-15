<?php

header("Content-Type: application/json");
header("Content-Security-Policy: default-src 'none'; connect-src 'none';");
header("Access-Control-Allow-Origin: ".$_SERVER['SERVER_NAME']);
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: access-control-allow-origin, access-control-allow-methods, access-control-allow-headers");

if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) {
    http_response_code(405);
    exit;
}

$request = json_decode(file_get_contents('php://input'), true);

require_once "dbconn.php";
$PDOconn = new PDO_Mysql();
$PDOconn->onWithException();
$PDOconn->getPDO_master()->beginTransaction();

try {

    // ---------------------------------------
    // VALIDATOR
    // ---------------------------------------
    if( $_SESSION['mb_gubun'] !== '본사' && rtrim($_SESSION['mb_jijum'], ',') !== '153' ) throw new Exception('권한이 없습니다.', '1');    
    if( empty($request['info']['id']) || is_null($request['info']['use_status']) || empty($request['info']['title'])) throw new Exception('잘못된 요청입니다.', '1');
    
    // ---------------------------------------
    // PATCH INFO
    // ---------------------------------------
    $PDOconn->quickUpdateQuery(
        'adot_on.study_roadmap',
        array(
            'use_status' => $request['info']['use_status'],
            'title' => $request['info']['title'],
        ),
        array(
            'id' => $request['info']['id']
        )
    );

    // ---------------------------------------
    // DELETE & INSERT CURR
    // ---------------------------------------
    if( count($request['curr']) > 0 ){

        $PDOconn->PDO_query(
            'adot_on.study_roadmap_curr',
            array(
                'roadmap_id' => $request['info']['id']
            ),
            false
        );

        foreach($request['curr'] as $val){
            $PDOconn->quickInsertQuery(
                'adot_on.study_roadmap_curr',
                array(
                    'roadmap_id' => $request['info']['id'],
                    'lt_id' => $val['lt_id'],
                    'sort' => $val['sort'],
                    'grade' => $val['grade'],
                    'grade_comment' => $val['grade_comment'],
                    'created_by' => $_SESSION['mb_id'],
                    'updated_by' => $_SESSION['mb_id']
                )
            );
        }
    }

    // ---------------------------------------
    // DELETE & INSERT VOCA
    // ---------------------------------------
    if( count($request['voca']) > 0 ){

        $PDOconn->quickDeleteQuery(
            'adot_on.study_roadmap_voca',
            array(
                'roadmap_id' => $request['info']['id']
            ),
            false
        );

        foreach($request['voca'] as $val){
            $PDOconn->quickInsertQuery(
                'adot_on.study_roadmap_voca',
                array(
                    'roadmap_id' => $request['info']['id'],
                    'sort' => $val['sort'],
                    'course' => $val['course'],
                    'created_by' => $_SESSION['mb_id'],
                    'updated_by' => $_SESSION['mb_id']
                )
            );
        }
    }
    
    $PDOconn->getPDO_master()->commit();
    $response['status'] = 1;

} catch(Exception $e) {
    
    $PDOconn->getPDO_master()->rollBack();
    $response['error'] = ((int)$e->getCode() === 1) ? $e->getMessage() : '네트워크 오류가 발생했습니다. 다시 시도해 주세요.';
    
} finally {

    unset($PDOconn);
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
    exit;
}