<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    public function update(Request $request, $user_id)
    {
        $user = User::find($user_id);
        $user->roles()->detach();
        $user->assignRole($request->input('roles'));

        return fractal($user, new UserTransformer())->parseIncludes('roles');
    }
}
