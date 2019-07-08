<?php

namespace smartstable\Http\Controllers;

use smartstable\User;
use smartstable\Http\Controllers\Controller;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        return view('application');
    }
}
