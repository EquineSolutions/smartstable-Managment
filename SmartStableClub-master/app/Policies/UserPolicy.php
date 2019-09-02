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

    public function browse(User $user)
    {
        return $user->hasPermissionTo('browse-users');
    }

    public function view(User $user)
    {
        return $user->hasPermissionTo('view-users');
    }

    public function create(User $user)
    {
        return $user->hasPermissionTo('add-users');
    }

    public function edit(User $user, User $requestedUser)
    {
        return $user->hasPermissionTo('edit-users') || $user->id == $requestedUser->id;
    }

    public function delete(User $user)
    {
        return $user->hasPermissionTo('delete-users');
    }

    public function permission(User $user)
    {
        return !request()->permissions || $user->hasAllPermissions(request()->permissions);
    }
}
