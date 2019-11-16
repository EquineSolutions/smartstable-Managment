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
use App\VerifyClub;
use App\Mail\VerifyMail;
use App\Mail\AdminMail;
use App\Mail\ApprovalMail;
use Mail;
use App\Http\Controllers\Request\AuthController as req_auth;
use App\Http\Controllers\Request\FileController as Equine_file;
use App\Http\Controllers\Request\ClubConnectionController;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\Auth;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Club::where('Approved',True)->orderBy('id','ASC')->get();
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


    public function store(Request $request){

        $this->pre_store($request);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function pre_store(Request $request)
    {
        $errorExist = false;
        $message ='';


        // check email is exist?
        $business_name =Input::get('business_name');
        if(Club::where("email",Input::get('email'))->count()>0){
            $status =200;
            $message = "this Email is existed,";
            $errorExist = true;
        }

        if(Club::where("business_name",$business_name)->count()>0){
            $status =200;
            $message.= " this business name is existed";
            $errorExist = true;
        }

        if(!$errorExist){
            try{
                $club = Club::create([
                    'first_name' => Input::get('first_name'),
                    'middle_name' => Input::get('middle_name'),
                    'last_name' => Input::get('last_name'),
                    'email' => Input::get('email'),
                    'phone' => Input::get('phone'),
                    'business_name' => $business_name,
                    'business_type' => Input::get('business_type')
                ]);
                if(req_auth::isAdmin()){
                    $club->approved = true;
                    $club->verified = true;
                    $club->save();
                    $admin_info=[
                        "business_name" => $business_name,
                        "email" =>$club['email'],
                        "first_name"=> $club['first_name'],
                        "last_name"=> $club['last_name'],
                        "password"=> Hash::make(Input::get('admin_password')),
                        "mobile"=> $club['phone'],
                    ];
                    $this->create_club_folder($business_name);
                    $this->create_club_DB($business_name);
                    // $this->club_settings($club);
                    $this->create_club_user($admin_info);


                    //send email ...
                    Mail::to($club->email)->send(new ApprovalMail($club,Input::get('admin_password')));


                }else{

                    //assign package ...
                     $this->assign_packages($club , Input::get('packages'));
                    // verification email ...
                    $verifyUser = VerifyClub::create([
                        'club_id' => $club->id,
                        'token' => str_random(40)
                    ]);
                    //send mail to club admin "pending req".

                    Mail::to($club->email)->send(new VerifyMail($club));

                    // send mail to smart admin "New club req".

                    Mail::to("maram.ramadan.ebraheem@gmail.com")->send(new AdminMail("dd"));
                }


                $status =200;
                $output = [
                    'status' => $status,
                    'message' => 'club created successfully',
                ];

            } catch (\Exception $e) {
                $status =500;
                $output = [
                    'status' => $status,
                    'error' => $e->getMessage(),
                ];

            }
        }else{
            $status =500;
            $output = [
                'status' => $status,
                'error' => $message,
            ];
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
                'packages' => $club->packages
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


    public function assign_packages($club, $packages){
        $packages_list = Package::find($packages);
        $club->packages()->attach($packages_list);
    }


    /**
     * @param  \App\Club  $club
     * @return \Illuminate\Http\Response
    **/

    public function assign_packages_to_club(Request $request){

        $club = Club::find( $request->input('club_id'));
        $packages = Package::find(Input::get('packages'));
        $club->packages()->attach($packages);

        if(req_auth::isAdmin()){
            $this->set_permission_to_club($packages , $club->business_name);
        }

        $output = [
            'status' => 200,

            'message' => 'packages assigned successfully',
        ];
        return response()->json($output,200);
    }

    public function set_permission_to_club($packages , $club){

        $conn = new mysqli(
            getenv('DB_HOST'),
            getenv('DB_USERNAME'),
            getenv('DB_PASSWORD'),
            $club);
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
                    mysqli_query($conn, $sql);
                    $last_permission_id = $conn->insert_id;
                    $sql = "insert into role_has_permissions values ($last_permission_id , 1)";
                    mysqli_query($conn, $sql);
                    $sql = "insert into model_has_roles values (1 , 'App\\\User',1)";
                    mysqli_query($conn, $sql);
                }
            }
        }
        $conn->close();
    }


    private function create_club_folder($club){
        $zipfile =  base_path('SmartStableClub-master.zip');
        if (file_exists($zipfile)) {
            Equine_file::unzip_file($zipfile,"./../../");
            Equine_file::rename("./../../SmartStableClub-master" , "./../../$club");
        }
        echo "Done";
    }


    private function create_club_DB($club) {
        DB::statement("CREATE DATABASE $club");
        // Create connections
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
        $output = shell_exec("cd ../../$club;
                npm install;composer install;
                php artisan passport:install;
        ");
        echo "<pre>$output</pre>";
        $old_file = $path."/.env.example";
        $new_file = $path."/.env";
        copy( $old_file, $new_file);
        // handle db credentials
        $this->env_db_credentials($new_file,$club);

        echo "config";
    }

    private function env_db_credentials($file,$club){
        $str=file_get_contents($file);
        $str=str_replace("DB_DATABASE=homestead", "DB_DATABASE=$club",$str);
        $str=str_replace("DB_USERNAME=homestead", "DB_USERNAME=root",$str);
        $str=str_replace("DB_PASSWORD=secret", "DB_PASSWORD=iti",$str);
        file_put_contents($file, $str);
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





    public function verifyClub($token)
    {
        $verifyClub = VerifyClub::verifyClubByToken($token);
        if(isset($verifyClub) ){
            $user = $verifyClub->club;
            if(!$user->verified) {
                $user->verified = 1;
                $user->save();
                $status_type = 'status';
                $status = "Your e-mail is verified. You can now Complete.";
            }else{
                $status_type = 'status';
                $status = "Your e-mail is already verified. You can now Complete.";
            }
        }else{
            $status = "Sorry your email cannot be identified.";
            $status_type = 'warning';
        }
        // var_dump($status); die;
        return view("emails.verificationMailMag", compact('status_type', 'status'));
    }

    public function pending_club()
    {

        $data = Club::where('Approved',False)->orderBy('id','ASC')->get();
        $output = [
            'status' => 200,
            'message' => 'Clubs loaded successfully',
            'data' => [
                'clubs' =>$data
            ]
        ];
        return response()->json($output,200);
    }

    public function approve_club(Request $request , $club_id)
    {
        $password = bin2hex(openssl_random_pseudo_bytes(4));
        $club = Club::find($club_id);
        $business_name = $club['business_name'];
        $admin_info=[
            "business_name" => $business_name,
            "email" =>$club['email'],
            "first_name"=> $club['first_name'],
            "last_name"=> $club['last_name'],
            "password"=> Hash::make($password),
            "mobile"=> $club['phone'],
        ];

        $this->create_club_folder($business_name);
        $this->create_club_DB($business_name);
        $this->create_club_user($admin_info);

        //update approve "club table" ..
        $club->approved = True;
        $club->save();

        //send email ...
        Mail::to($club->email)->send(new ApprovalMail($club,$password));

        die('ddd');

    }

    public function createClub(){

    }




}
