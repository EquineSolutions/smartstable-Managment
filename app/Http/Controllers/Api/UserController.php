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
use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

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
        $output = [
            'status' => 200,
            'message' => 'User loaded successfully',
            'data' => $user
        ];
        return response()->json($output);
    }

    public function index()
    {
        $this->authorize('index', User::class);
        $data = User::orderBy('id','DESC')->get();
        $output = [
            'status' => 200,
            'message' => 'User loaded successfully',
            'data' => $data
        ];
        return response()->json($output);

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
        $output = [
            'status' => 200,
            'message' => 'roles loaded successfully',
            'data' => [
                'roles' => $roles
            ]
        ];
        return response()->json($output);
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
        $output = [
            'status' => 200,
            'message' => 'User created successfully',
        ];
        return response()->json($output);
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
        $output = [
            'status' => 200,
            'message' => 'Roles loaded successfully',
            'data' => [
                'roles' => $roles,
                'userRole' => $userRole
            ]
        ];
        return response()->json($output);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateUserRequest $request
     * @param User $user
     * @return Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */

    public function update(Request $request, User $user)
    {
        $this->authorize('edit', [User::class, $user]);

        $data = $request->all();

        DB::beginTransaction();
        try{

            if(!empty($input['password'])){
                $input['password'] = Hash::make($input['password']); //update the password
            }
            if ($request->hasFile('image')) {
                $image = $request->file('image');

                $file_name = md5(time() . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path() . '/uploads/images/user/';
                $image->move($destinationPath, $file_name);

                $data['image'] = $file_name;
            }
            $user->update($data);
            $user->save();
            DB::table('model_has_roles')->where('model_id',$user->id)->delete();
            $user->assignRole($request->input('roles'));
            DB::commit();
            $output = [
                'status' => 200,
                'message' => 'User updated successfully',
            ];
        } catch (\Exception $e) {
            DB::rollback();
            $output = [
                'status' => 500,
                'error' => $e->getMessage(),
            ];
        }
        return response()->json($output);

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
        $output = [
            'status' => 200,
            'message' => 'User deleted successfully',
        ];
        return response()->json($output);
    }
}
