<?php

namespace App\Http\Controllers\Request;

use App\Http\Controllers\Controller;
use mysqli;

class ClubConnectionController extends Controller
{
    public function __construct($club)
    {
        $this->club = $club;
        // $this->open_connection($club);
    }

    public function open_connection($db){
        $conn = new mysqli(
            getenv('DB_HOST'),
            getenv('DB_USERNAME'),
            getenv('DB_PASSWORD'),
            $this->club);
        return $conn;
    }

    public function sql_exec($db ,$sql){
        $conn = $this->open_connection($db);
        return mysqli_query($conn, $sql);
    }


    public function close_connection(){

    }
}
?>
