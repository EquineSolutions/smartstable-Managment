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

//Route::group(['prefix' => 'user'], function () {
//    Route::get('', 'Api\UserController@index');
//    Route::get('{id}', 'Api\UserController@show');
//    Route::post('', 'Api\UserController@store');
//    Route::delete('{id}', 'Api\UserController@destroy');
//    Route::patch('{id}', 'Api\UserController@edit');
//    Route::put('{id}', 'Api\UserController@update');
//});
