<?php

use Illuminate\Http\Request;


Route::group(['prefix' => 'api/v1/account'], function(Request $request) {
        Route::middleware('guest:api')->post('login', 'API\AccountController@login');
        Route::middleware('guest:api')->post('register', 'API\AccountController@register');
        Route::middleware('guest:api')->post('forgot', 'API\AccountController@forgot');
        Route::middleware('auth:api')->post('logout', 'API\AccountController@logout');
});
Route::group(['prefix' => 'api/v1/profile'], function(Request $request) {
        Route::middleware('auth:api')->get('retrieve', 'API\ProfileController@retrieve');
        Route::post('auth:api')->post('update/fullname', 'API\ProfileController@fullname');
        Route::post('auth:api')->post('update/password', 'API\ProfileController@email');
        Route::post('auth:api')->post('update/email', 'API\ProfileController@password');
});