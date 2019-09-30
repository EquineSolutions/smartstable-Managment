<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class HorsePolicy
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
        return $user->hasPermissionTo('browse-horses');
    }

    public function view(User $user)
    {
        return $user->hasPermissionTo('view-horses');
    }

    public function create(User $user)
    {
        return $user->hasPermissionTo('add-horses');
    }

    public function edit(User $user)
    {
        return $user->hasPermissionTo('edit-horses');
    }

    public function delete(User $user)
    {
        return $user->hasPermissionTo('delete-horses');
    }

    public function permission(User $user)
    {
        return !request()->permissions || $user->hasAllPermissions(request()->permissions);
    }
}
