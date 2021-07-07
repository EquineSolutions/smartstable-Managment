<?php

namespace App\Http\Controllers\Request;

use App\Http\Controllers\Controller;
use ZipArchive;

class FileController extends Controller
{
    static function rename($old,$new){
        if (file_exists($old)) {
            rename($old,$new);
        }
    }

    static function unzip_file($zipfile,$path){
        if (file_exists($zipfile)) {
            $zip = new ZipArchive;
            $res = $zip->open($zipfile);
            if ($res === TRUE) {
                $zip->extractTo($path);
                $zip->close();
            }
        }
    }

}
?>
