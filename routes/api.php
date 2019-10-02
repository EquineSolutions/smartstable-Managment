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
Route::get('copy', 'Api\ClubController@club_settings');
Route::middleware('auth:api')->post('authorize', 'Api\PassportController@authorizeUserPermission');
// Route::post('register', 'Api\PassportController@register');

Route::middleware('auth:api')->group(function () {
    Route::resource('roles','Api\RoleController');
    Route::resource('users','Api\UserController');
    Route::resource('features','Api\FeatureController');
    Route::resource('packages','Api\PackageController');
    Route::resource('clubs','Api\ClubController');
    Route::post('assign_packages','Api\ClubController@assign_packages_to_club');
    Route::get('user_info','Api\UserController@all_user_info');
    Route::get('logout', 'Api\PassportController@logout');


});

Route::middleware('auth:api')->post('profile/{id}', 'Api\UserController@updateProfileData');

Route::put('user/role/{user_id}', 'Api\UserRoleController@update');
Route::resource('clubs','Api\ClubController');
Route::post('club/user','Api\ClubController@user_club');

