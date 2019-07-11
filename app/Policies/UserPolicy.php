<?php

namespace App\Policies;

use App\User;
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
        return $user->hasRole('super-admin');
    }

    public function edit(User $user, User $requestedUser)
    {
        return $user->hasRole('super-admin') || $user->id == $requestedUser->id;
    }
}
