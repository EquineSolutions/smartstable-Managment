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

    public function browse(User $user)
    {
        return $user->hasPermissionTo('browse-roles');
    }

    public function view(User $user)
    {
        return $user->hasPermissionTo('view-roles');
    }

    public function create(User $user)
    {
        return $user->hasPermissionTo('add-roles');
    }

    public function edit(User $user)
    {
        return $user->hasPermissionTo('edit-roles');
    }

    public function delete(User $user)
    {
        return $user->hasPermissionTo('delete-roles');
    }
}
