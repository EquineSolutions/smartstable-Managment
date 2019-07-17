<?php


namespace App\Http\Controllers\Api;


use App\Http\Requests\RoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Transformers\PermissionTransformer;
use App\Transformers\RoleTransformer;
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

        return fractal(Role::orderBy('id','DESC')->get(), new RoleTransformer());
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create()
    {
        $this->authorize('index', Role::class);

        return fractal(Permission::get(), new PermissionTransformer());
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

        DB::beginTransaction();
        try{
            $role = Role::create(['name' => $data['name']]);
            $role->syncPermissions($data['permission']);
            DB::commit();
            return fractal($role, new RoleTransformer())->parseIncludes('permissions');

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' =>$e->getMessage()], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param Role $role
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Role $role)
    {
        $this->authorize('show', [Role::class, $role]);

        return fractal($role->with('permissions')->get(), new RoleTransformer())->parseIncludes('permissions');
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

        return response()->json([
            'role' => $role->with('permissions')->get(),
            'permissions' => Permission::get(),
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
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $this->authorize('show', [Role::class, $role]);

        $data = $request->validated();

        $role->name = $data['name'];
        $role->save();

        $role->syncPermissions($data['permission']);

        return fractal($role->with('permissions')->get(), new RoleTransformer())->parseIncludes('permissions');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param Role $role
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Role $role)
    {
        $this->authorize('show', [Role::class, $role]);
        $role->delete();
        return response()->json(['success' =>'Role deleted successfully' ], 200);
    }
}
