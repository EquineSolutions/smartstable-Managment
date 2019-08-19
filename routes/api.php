<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', 'Api\PassportController@login');
Route::middleware('auth:api')->post('authorize', 'Api\PassportController@authorizeUserPermission');
// Route::post('register', 'Api\PassportController@register');

Route::middleware('auth:api')->group(function () {
    Route::resource('roles','Api\RoleController');
    Route::resource('users','Api\UserController');
    Route::resource('clients','Api\ClientController');
    Route::get('user_info','Api\UserController@all_user_info');
    Route::resource('features','Api\FeatureController');
    Route::get('logout', 'Api\PassportController@logout');
});

Route::middleware('auth:api')->post('profile/{id}', 'Api\UserController@updateProfileData');

Route::put('user/role/{user_id}', 'Api\UserRoleController@update');

Route::get('client_info/{user_email}','Api\ClientController@get_client_info');
