<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use App\Transformers\RoleTransformer;
use App\Transformers\UserTransformer;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
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
use Spatie\Permission\Models\Permission;

class UserController extends Controller
{

    public function index()
    {
        $this->authorize('browse', User::class);
        $data = User::orderBy('id','ASC')->get();
        $output = [
            'status' => 200,
            'message' => 'User loaded successfully',
            'data' => $data
        ];
        return response()->json($output,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     * @throws AuthorizationException
     */
    public function create()
    {
        $this->authorize('create', User::class);
        $roles = Role::pluck('name')->all();
        return response()->json([
            'status' => 200,
            'message' => 'roles loaded successfully',
            'data' => $roles
        ],200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param UserRequest $request
     * @return Response
     * @throws AuthorizationException
     */
    public function store(UserRequest $request)
    {
        $this->authorize('create', User::class);
        $data = $request->validated();

        $data['password'] = bcrypt($data['password']); //Hash password
        $user = User::create($data);
        $user->assignRole($request->input('roles'));
        return response()->json([
            'status' => 200,
            'message' => 'User created successfully',
            'data' => []
        ],200);
    }


    /**
     * Returns Authenticated User Details
     *
     * @param User $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(User $user)
    {
        $this->authorize('view', User::class);
        $output = [
            'status' => 200,
            'message' => 'User loaded successfully',
            'data' => $user
        ];
        return response()->json($output,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return Response
     *
     * Updated response....
     * @throws AuthorizationException
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
                'userRole' => $userRole,
                'user' => $user
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return Response
     * @throws AuthorizationException
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
                $data['image'] = downloadFile($request->file('image'), '/uploads/images/user/');
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
            $status = 200;
        } catch (Exception $e) {
            DB::rollback();
            $output = [
                'status' => 500,
                'error' => $e->getMessage(),
            ];
            $status = 500;
        }
        return response()->json($output,$status);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return Response
     * @throws AuthorizationException
     */
    public function destroy(User $user)
    {
        $this->authorize('delete', User::class);
        $user->delete();
        $output = [
            'status' => 200,
            'message' => 'User deleted successfully',
        ];
        return response()->json($output,200);
    }
    public function updateProfileData(Request $request, $id) {

        $user = User::find($id);
        $this->authorize('edit', [User::class, $user]);
        $data = $request->all();

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
        $output = [
            'status' => 200,
            'message' => 'User updated successfully',
        ];
        return response()->json(['success' =>'User updated successfully','User' => fractal($user, new UserTransformer()) ], 200);
    }

    public function all_user_info(Request $request) {
        $role_id = $request->user()->roles->pluck('id')->first();
        $rolePermissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
            ->where("role_has_permissions.role_id",$role_id)
            ->get();
        $output = [
            'status' => 200,
            'message' => 'User loaded successfully',
            'data' => [
                'user' => $request->user(),
                'role' => $request->user()->roles->pluck('name','id')->first(),
                'rolePermissions' => $rolePermissions
            ]
        ];
        return response()->json($output);
    }
}
