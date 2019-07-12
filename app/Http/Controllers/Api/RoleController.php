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
        return response()->json(['roles' =>$roles ], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $permission = Permission::get();
        return response()->json(['permission' =>$permission ], 200);
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
            return response()->json(['success' =>'Role created successfully' ], 200);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' =>$e->getMessage() ], 500);
        }

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

        return response()->json(['role' => $role , 'rolePermissions' => $rolePermissions], 200);
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

        return response()->json([
            'role' => $role,
            'permission' => $permission,
            'rolePermissions' => $rolePermissions,
        ], 200);
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

        $data = $request->validated();

        $role->name = $data['name'];
        $role->save();


        $role->syncPermissions($data['permission']);

        return response()->json(['success' =>'Role updated successfully' ], 200);
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
        return response()->json(['success' =>'Role deleted successfully' ], 200);
    }
}
