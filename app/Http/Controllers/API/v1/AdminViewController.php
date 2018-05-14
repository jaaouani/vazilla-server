<?php
namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Route;

class AdminViewController extends Controller {
    public function login() { return view('admin-login'); }
    public function forgot() { return view('admin-forgot'); }
}