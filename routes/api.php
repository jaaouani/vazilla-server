<?php

use Illuminate\Http\Request;

Route::group(['prefix' => '/v1/account'], function() {
        Route::middleware('guest:api')->post('/login', 'API\v1\AccountController@login');
        Route::middleware('guest:api')->post('/register', 'API\v1\AccountController@register');
        Route::middleware('guest:api')->post('/forgot', 'API\v1\AccountController@forgot');
        Route::middleware('auth:api')->post('/logout', 'API\v1\AccountController@logout');
});
Route::group(['prefix' => '/v1/profile'], function() {
        Route::middleware('auth:api')->get('/retrieve', 'API\v1\ProfileController@retrieve');
        Route::middleware('auth:api')->post('/update/fullname', 'API\v1\ProfileController@fullname');
        Route::middleware('auth:api')->post('/update/password', 'API\v1\ProfileController@email');
        Route::middleware('auth:api')->post('/update/email', 'API\v1\ProfileController@password');
});
Route::group(['prefix' => '/v1/admin'], function() {
        Route::middleware('guest:admin-api')->post('/login', 'API\v1\AdminController@login');
        Route::middleware('guest:admin-api')->post('/forgot', 'API\v1\AdminController@forgot');
        Route::middleware('auth:admin-api')->post('/logout', 'API\v1\AdminController@logout');
});