<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class HorseParentPolicy
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

    public function edit(User $user)
    {
        return $user->hasPermissionTo('edit-horses-parent');
    }

    public function create(User $user)
    {
        return $user->hasPermissionTo('add-horses-parent');
    }

    public function delete(User $user)
    {
        return $user->hasPermissionTo('delete-horses-parent');
    }
}
