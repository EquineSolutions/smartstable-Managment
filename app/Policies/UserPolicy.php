<?php

namespace App\Policies;

use App\User;
use http\Env\Request;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
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
        return $user->hasPermissionTo('user-list');
    }

    public function create(User $user)
    {
        return $user->hasPermissionTo('user-create');
    }

    public function edit(User $user, User $requestedUser)
    {
        return $user->hasPermissionTo('user-edit') || $user->id == $requestedUser->id;
    }

    public function destroy(User $user)
    {
        return $user->hasPermissionTo('user-delete');
    }

    public function permission(User $user)
    {
        return !request()->permissions || $user->hasAllPermissions(request()->permissions);
    }
}