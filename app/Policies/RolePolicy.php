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
        return $user->hasRole('super-admin');
    }

    public function show(User $user, Role $role)
    {
        return $user->hasRole('super-admin');
    }
}
