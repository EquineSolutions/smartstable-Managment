<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClientPolicy
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
        return $user->hasPermissionTo('browse-clients');
    }

    public function view(User $user)
    {
        return $user->hasPermissionTo('view-clients');
    }

    public function create(User $user)
    {
        return $user->hasPermissionTo('add-clients');
    }

    public function edit(User $user)
    {
        return $user->hasPermissionTo('edit-clients');
    }

    public function delete(User $user)
    {
        return $user->hasPermissionTo('delete-clients');
    }

    public function permission(User $user)
    {
        return !request()->permissions || $user->hasAllPermissions(request()->permissions);
    }
}
