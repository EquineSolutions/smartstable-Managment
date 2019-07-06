<?php

namespace App\Http\Controllers\Api;

use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return fractal($users, new UserTransformer());
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
        $validator = Validator::make($request->all(), [
            'fname'=>'required',
            'lname'=> 'required',
            'email' => 'required|unique:users',
            'mobile' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->messages()->first();
        }

        $user = new User();
        $user->first_name = $request->input('fname');
        $user->last_name = $request->input('lname');
        $user->email = $request->input('email');
        $user->mobile = $request->input('mobile');

        $user->password = Hash::make($request->input('password'));

        return json_encode(['response' => $user->save()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return json_encode(fractal($user, new UserTransformer()));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        return json_encode(fractal($user, new UserTransformer()));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'fname'=>'required',
            'lname'=> 'required',
            'email' => 'required',
            'mobile' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->messages()->first();
        }

        $user = User::find($id);

        $user->first_name = $request->input('fname');
        $user->last_name = $request->input('lname');
        $user->email = $request->input('email');
        $user->mobile = $request->input('mobile');

        return json_encode(['response' => $user->save()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return json_encode(['response' => User::find($id)->delete()]);
    }
}
