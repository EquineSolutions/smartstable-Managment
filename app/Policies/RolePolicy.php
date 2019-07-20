<?php

namespace App\Policies;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Spatie\Permission\Models\Role;

class RolePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(User $user)
    {
        return $user->hasPermissionTo('role-list');
    }

    public function create(User $user)
    {
        return $user->hasPermissionTo('role-create');
    }

    public function edit(User $user)
    {
        return $user->hasPermissionTo('role-edit');
    }

    public function destroy(User $user)
    {
        return $user->hasPermissionTo('role-delete');
    }
}