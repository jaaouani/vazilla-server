<?php
    Route::middleware('guest')->get('/', 'API\v1\AccountViewController@home');
    Route::middleware('guest')->get('/login', 'API\v1\AccountViewController@login');
    Route::middleware('guest')->get('/register', 'API\v1\AccountViewController@register');

    Route::middleware('guest')->get('/admin', 'API\v1\AdminViewController@login');
    Route::middleware('guest')->get('/admin/forgot', 'API\v1\AdminViewController@forgot');