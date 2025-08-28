<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // тут можна зберігати телефон
    http_response_code(200);
    echo json_encode(["status" => "ok"]);
    exit;
}
http_response_code(405);
