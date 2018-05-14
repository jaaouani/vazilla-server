<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'api/v1/account'], function(Request $request) {
        Route::middleware('guest:api')->post('login', 'v1\API\AccountController@login');
        Route::middleware('guest:api')->post('register', 'v1\API\AccountController@register');
        Route::middleware('guest:api')->post('forgot', 'v1\API\AccountController@forgot');
        Route::middleware('auth:api')->post('logout', 'v1\API\AccountController@logout');
});
Route::group(['prefix' => 'api/v1/profile'], function(Request $request) {
        Route::middleware('auth:api')->get('retrieve', 'v1\API\ProfileController@retrieve');
        Route::post('auth:api')->post('update/fullname', 'v1\API\ProfileController@fullname');
        Route::post('auth:api')->post('update/password', 'v1\API\ProfileController@email');
        Route::post('auth:api')->post('update/email', 'v1\API\ProfileController@password');
});