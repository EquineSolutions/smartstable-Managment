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


//??? why ?
Route::put('user/role/{user_id}', 'Api\UserRoleController@update');


Route::resource('clubs','Api\ClubController');
Route::post('club/user','Api\ClubController@user_club');
Route::get('club/verify/{token}', 'Api\ClubController@verifyClub');
Route::resource('clubs','Api\ClubController');


Route::get('packages','Api\PackageController@index');
Route::get('pending_club','Api\ClubController@pending_club');
Route::get('approve_club/{club}','Api\ClubController@approve_club');

Route::middleware('auth:api')->group(function () {
    Route::resource('roles','Api\RoleController');
    Route::resource('users','Api\UserController');
    Route::resource('features','Api\FeatureController');
    Route::resource('packages','Api\PackageController')->except([
        'index'
    ]);
    Route::post('assign_packages','Api\ClubController@assign_packages_to_club');
    Route::get('user_info','Api\UserController@all_user_info');
    Route::get('logout', 'Api\PassportController@logout');
    Route::post('profile/{id}', 'Api\UserController@updateProfileData');
    Route::post('authorize', 'Api\PassportController@authorizeUserPermission');

});




Route::get('stripe/{club}', 'Payment\StripePaymentController@stripe');
Route::post('stripe', 'Payment\StripePaymentController@stripePost')->name('stripe.post');
