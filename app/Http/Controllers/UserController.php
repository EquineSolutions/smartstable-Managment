<?php

namespace smartstable\Http\Controllers;

use Illuminate\Http\Request;
use smartstable\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Spatie\Permission\Models\Role;
use DB;
use Hash;

class UserController extends Controller
{

    /**
     * Returns Authenticated User Details
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function show($id)
    {
        $user = User::find($id);
        return response()->json(['user' => $user], 200);
    }

    public function index()
    {
        $data = User::orderBy('id','DESC')->get();
        return response()->json(['users' =>$data ], 200);

    }

     /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $roles = Role::pluck('name')->all();
        return response()->json(['roles' =>$roles ], 200);
    }


     /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name'=>'required',
            'last_name'=> 'required',
            'email' => 'required|unique:users',
            'mobile' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->messages()->first();
        }

        $input = $request->only('first_name', 'last_name', 'mobile', 'email', 'password');
        $input['password'] = Hash::make($input['password']); //Hash password
        $user = User::create($input);
        $user->assignRole($request->input('roles'));
        return response()->json(['success' =>'User created successfully' ], 200);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     *
     * Updated response....
     */
    public function edit($id)
    {
        $user = User::find($id);
        $roles = Role::pluck('name')->all();
        $userRole = $user->roles->pluck('name')->first();
        return response()->json(['user' =>$user ,
            'roles' => $roles,
            'userRole' => $userRole
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'mobile' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
            'password' => 'same:confirm-password',
            'roles' => 'required'
        ]);
        if ($validator->fails()) {
            return $validator->messages()->first();
        }


        DB::beginTransaction();
        try{
            $input = $request->only('first_name', 'last_name', 'mobile', 'email', 'password');
        if(!empty($input['password'])){
            $input['password'] = Hash::make($input['password']); //update the password
        }else{
            $input = array_except($input,array('password')); //remove password from the input array
        }
        $user = User::find($id);
        $user->update($input);
        DB::table('model_has_roles')->where('model_id',$id)->delete();
        $user->assignRole($request->input('roles'));
        DB::commit();
        return response()->json(['success' =>'User updated successfully','User' => $user ], 200);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' =>$e ], 500);
        }


    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return response()->json(['success' =>'User deleted successfully' ], 200);
    }
}
