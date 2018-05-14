<?php
    Route::middleware('guest')->get('/', 'API\v1\ViewController@home');
    Route::middleware('guest')->get('/login', 'API\v1\ViewController@login');
    Route::middleware('guest')->get('/register', 'API\v1\ViewController@register');