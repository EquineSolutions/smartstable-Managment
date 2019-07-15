<?php


namespace App\Http\Controllers\Api;


use App\Http\Requests\RoleRequest;
use App\Transformers\RoleTranformer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;


class RoleController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index(Request $request)
    {
        $this->authorize('index', Role::class);
        $roles = Role::orderBy('id','DESC')->get();
        $output = [
            'status' => 200,
            'message' => 'Roles loaded successfully',
            'data' => [
                'roles' =>$roles
            ]
        ];
        return response()->json($output);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $permission = Permission::get();
        $output = [
            'status' => 200,
            'message' => 'Permissions loaded successfully',
            'data' => [
                'permission' =>$permission
            ]
        ];
        return response()->json($output);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(RoleRequest $request)
    {
        $this->authorize('index', Role::class);

        $data = $request->validated();

        try{
            $role = Role::create(['name' => $data['name']]);
            $role->syncPermissions($data['permission']);
            DB::commit();
            $output = [
                'status' => 200,
                'message' => 'Role created successfully',
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
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Role $role)
    {
        $this->authorize('show', [Role::class, $role]);
        $rolePermissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
            ->where("role_has_permissions.role_id",$role->id)
            ->get();

        $output = [
            'status' => 200,
            'message' => 'Permissions loaded successfully',
            'data' => [
                'role' => $role ,
                'rolePermissions' => $rolePermissions
            ]
        ];
        return response()->json($output);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Role $role)
    {
        $this->authorize('show', [Role::class, $role]);
        $permission = Permission::get();
        $rolePermissions = DB::table("role_has_permissions")->where("role_has_permissions.role_id", $role->id)
            ->pluck('role_has_permissions.permission_id','role_has_permissions.permission_id')
            ->all();

        $output = [
            'status' => 200,
            'message' => 'Permissions loaded successfully',
            'data' => [
                'role' => $role,
                'permission' => $permission,
                'rolePermissions' => $rolePermissions,
            ]
        ];
        return response()->json($output);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Role $role)
    {
        $this->authorize('show', [Role::class, $role]);

        $data = $request->all();

        $role->name = $data['name'];
        $role->save();


        $role->syncPermissions($data['permission']);

        $output = [
            'status' => 200,
            'message' => 'Role updated successfully',
        ];
        return response()->json($output);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Role $role)
    {
        $this->authorize('show', [Role::class, $role]);
        DB::table("roles")->where('id',$role->id)->delete();
        $output = [
            'status' => 200,
            'message' => 'Role deleted successfully',
        ];
        return response()->json($output);
    }
}
