<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use App\Transformers\RoleTransformer;
use App\Transformers\UserTransformer;
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

        return fractal($user, new UserTransformer());
    }

    public function index()
    {
        $this->authorize('index', User::class);

        return fractal(User::orderBy('id','DESC')->get(), new UserTransformer());
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

        return fractal(Role::all(), new RoleTransformer());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param UserRequest $request
     * @return Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(UserRequest $request)
    {
        $this->authorize('index', User::class);

        $data = $request->validated();

        if ($request->hasFile('image')) {
            $image = $request->file('image');

            $file_name = md5(time() . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path() . '/uploads/images/user/';
            $image->move($destinationPath, $file_name);

            $data['image'] = $file_name;
        }

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

        return response()->json([
            'roles' => Role::all(),
            'user' => $user->with('roles')
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

        $data = $request->all();

        if ($request->hasFile('image')) {
            $image = $request->file('image');

            $file_name = md5(time() . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path() . '/uploads/images/user/';
            $image->move($destinationPath, $file_name);

            $data['image'] = $file_name;
        }

        if(!empty($input['password'])){
            $input['password'] = Hash::make($input['password']); //update the password
        }
        $user->update($data);
        return fractal($user, new UserTransformer());

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
