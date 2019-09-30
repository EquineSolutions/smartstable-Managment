<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Club;
use App\Package;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use ZipArchive;
use mysqli;
use Illuminate\Console\Command;
use Illuminate\Redis\Events\CommandExecuted;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Club::orderBy('id','ASC')->get();
        $output = [
            'status' => 200,
            'message' => 'Clubs loaded successfully',
            'data' => [
                'clubs' =>$data
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try{
            $business_name =Input::get('business_name');
            // Club::create([
            //     'first_name' => Input::get('first_name'),
            //     'last_name' => Input::get('last_name'),
            //     'email' => Input::get('email'),
            //     'phone' => Input::get('phone'),
            //     'business_name' => $business_name,
            //     'business_type' => Input::get('business_type')
            // ]);
            $admin_info=[
                "business_name" => $business_name,
                "email" => Input::get('admin_email'),
                "first_name"=> Input::get('admin_first_name'),
                "last_name"=> Input::get('admin_last_name'),
                "password"=> Input::get('admin_password'),
                "mobile"=> Input::get('admin_phone'),
            ];
            // $this->create_club_folder($business_name);
            // $this->create_club_DB($business_name);
            $this->club_settings($club);
            $this->create_club_user($admin_info);

            DB::commit();
            $output = [
                'status' => 200,
                'message' => 'club created successfully',
            ];
            $status =200;
        } catch (\Exception $e) {
            DB::rollback();
            $output = [
                'status' => 500,
                'error' => $e->getMessage(),
            ];
            $status =500;
        }
        return response()->json($output,$status);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function show(club $club)
    {
        $output = [
            'status' => 200,
            'message' => 'feature loaded successfully',
            'data' => [
                'club' => $club,
                'packages' => $club->packages()
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function edit(club $club)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, club $club)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function destroy(club $club)
    {
        //
    }

    /**
     * @param  \App\Club  $club
     * @return \Illuminate\Http\Response
    */
    public function assign_packages_to_club(Request $request ,Club $club){
        $club = Club::find( $request->input('club_id'));
        $conn = new mysqli(
            getenv('DB_HOST'),
            getenv('DB_USERNAME'),
            getenv('DB_PASSWORD'),
            $club->business_name);
        $packages = Package::find(Input::get('packages'));
        $club->packages()->attach($packages);
        $sql = "insert into roles(name,guard_name) values ('club_admin','api')";
        mysqli_query($conn, $sql);
        $last_role_id = $conn->insert_id;
        $permissions = ['browse','view','add','edit','delete'];
        foreach($packages as $package){
           $features =  $package->features;
           foreach($features as $feature){
                foreach($permissions as $permission ){
                    $name = $permission."-".$feature->name;
                    $display_name = ucwords($permission." ".$feature->name);
                    $sql = "insert into permissions(name,display_name,`group`,guard_name) values ('".$name."','".$display_name."','".$feature->name."','api')";
                    $last_permission_id = $conn->insert_id;
                    mysqli_query($conn, $sql);
                    $sql = "insert into role_has_permissions values ($last_permission_id , 1)";
                    mysqli_query($conn, $sql);
                    $sql = "insert into model_has_roles values (1 , 'App\\\User',1)";
                    mysqli_query($conn, $sql);
                }

            }
        }
        $conn->close();

        $output = [
            'status' => 200,
            'message' => 'packages assigned successfully',
        ];
        return response()->json($output,200);
    }


    private function create_club_folder($club){
        $zipfile =  base_path('SmartStableClub-master.zip');
        if (file_exists($zipfile)) {
            $zip = new ZipArchive;
            $res = $zip->open($zipfile);
            if ($res === TRUE) {
                $zip->extractTo( "./../../");
                $zip->close();

            }
            rename("./../../SmartStableClub-master" , "./../../$club");
        }
        echo "Done";
    }

    private function create_club_DB($club) {
        DB::statement("CREATE DATABASE $club");
        /// Create connection
        $conn = new mysqli(
            getenv('DB_HOST'),
            getenv('DB_USERNAME'),
            getenv('DB_PASSWORD'),
            $club);
        // Check connection
        if ($conn->connect_error) {
            return "Connection to database failed ";
            exit();
        }
        // Temporary variable, used to store current query
        $templine = '';

        $lines = fopen(base_path("smartstable-club.sql"), 'r');
        // Loop through each line
        while (($line = fgets($lines)) !== false) {
            // Skip it if it's a comment
            if (substr($line, 0, 2) == '--' || $line == '')
                continue;
            // Add this line to the current segment
            $templine .= $line;
            $done = 1;
            // If it has a semicolon at the end, it's the end of the query
            if (substr(trim($line), -1, 1) == ';') {
                // Perform the query
                if (!mysqli_query($conn, $templine)) {
                    // Perform the query
                    if ($conn->query($templine) === False) {
                        $done = 0;
                        $message = "Error Database importe";
                    }
                }
                // Reset temp variable to empty
                $templine = '';
            }
        }
        fclose($lines);
        $conn->close();
        if ($done) {

            $message = "Database imported successfully";
            $this->club_settings($club);
        }

        echo $message;
    }

    private function club_settings($club){
        $path = "./../../$club";
        // $output = shell_exec("cd ../../$club;
        //         npm install;composer install;
        //         php artisan passport:install;
        // ");
        // echo "<pre>$output</pre>";
        // die;
        $old_file = $path."/.env.example";
        $new_file = $path."/.env";
        copy( $old_file, $new_file);
        $str=file_get_contents($new_file);
        $str=str_replace("DB_DATABASE=homestead", "DB_DATABASE=$club",$str);
        $str=str_replace("DB_USERNAME=homestead", "DB_USERNAME=root",$str);
        $str=str_replace("DB_PASSWORD=secret", "DB_PASSWORD=iti",$str);
        file_put_contents($new_file, $str);

        echo "config";
    }

    private function create_sub_domain($club){
        if (PHP_OS == 'Linux') {
            $HostInfo = self::getHostInfo();
            $cPanel = new cPanel($HostInfo['account'], $HostInfo['PASSWORD'], $HostInfo['HOST']);
            $domain = $club;
            $rootdomain = 'cloudy-pos.net';
            $array = array(
                'domain' => $domain,
                'rootdomain' => $rootdomain,
                'dir' => '/public_html/' . $club,
                'disallowdot' => '1',
            );
            $addsubdomain = $cPanel->api2("SubDomain", "addsubdomain", $array);
        }
    }



    public function create_club_user($info)
    {
        extract($info);
        $sql = "insert into users(first_name,last_name,email,password,mobile) values ('".$first_name."','".$last_name."','".$email."','".bcrypt($password)."','".$mobile."')";
        $this->open_connection_for_club($business_name , $sql);
    }


    private function open_connection_for_club($club , $sql){
        $conn = new mysqli(
            getenv('DB_HOST'),
            getenv('DB_USERNAME'),
            getenv('DB_PASSWORD'),
            $club);

        if (mysqli_query($conn, $sql)){
            echo "Done";
        }else{
            echo "failed";
        }
        $conn->close();
    }
}
