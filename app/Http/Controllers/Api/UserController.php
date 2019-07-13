<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use App\User;
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
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(User $user)
    {
        $this->authorize('index', User::class);
        return response()->json(['user' => $user], 200);
    }

    public function index()
    {
        $this->authorize('index', User::class);
        $data = User::orderBy('id','DESC')->get();
        return response()->json(['users' =>$data ], 200);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create()
    {
        $this->authorize('index', User::class);
        $roles = Role::pluck('name')->all();
        return response()->json(['roles' =>$roles ], 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(UserRequest $request)
    {
        $this->authorize('index', User::class);
        $data = $request->validated();

        $data['password'] = bcrypt($data['password']); //Hash password
        $user = User::create($data);
        $user->assignRole($request->input('roles'));
        return response()->json(['success' =>'User created successfully' ], 200);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     *
     * Updated response....
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */

    public function edit(User $user)
    {
        $this->authorize('edit', [User::class, $user]);
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
     * @param UpdateUserRequest $request
     * @param User $user
     * @return Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */

    public function update(UpdateUserRequest $request, User $user)
    {
        $this->authorize('edit', [User::class, $user]);

        $data = $request->validated();

        if(!empty($data['password'])){
            $data['password'] = bcrypt($data['password']); //update the password
        }

        $user->update($data);
        $user->save();
        return response()->json(['success' =>'User updated successfully','User' => $user ], 200);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(User $user)
    {
        $this->authorize('edit', [User::class, $user]);
        $user->delete();
        return response()->json(['success' =>'User deleted successfully'], 200);
    }
}
