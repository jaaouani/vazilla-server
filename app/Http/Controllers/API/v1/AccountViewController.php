<?php
namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Route;

class AccountViewController extends Controller {
    public function home() { return view('off-home'); }
    public function login() { return view('off-login'); }
    public function register() { return view('off-register'); }
}