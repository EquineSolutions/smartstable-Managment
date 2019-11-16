<?php

namespace App\Http\Controllers\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    static function isAdmin(){
        if(Auth::check()){
            return (Auth::user()->roles->pluck('name')->first() === 'super-admin');
        }
        return false;

    }
}
