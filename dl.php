<?php
$download_dir = $_SERVER['DOCUMENT_ROOT'] . '/download/';

if (isset($_REQUEST['i'])) {
    $file = $_REQUEST['i'];
    $filepath = $download_dir . $file;
}

if (!file_exists($filepath)) {
    die('File not found');
}
else {
    // Set headers
    header("Cache-Control: public");
    header("Content-Description: File Transfer");
    header("Content-Disposition: attachment; filename=$file");
    header("Content-Type: application/octet-stream");
    header("Content-Transfer-Encoding: binary");
    // Read the file from disk
    readfile($filepath); 
}
?>