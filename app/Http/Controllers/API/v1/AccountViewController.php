<?php
namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Route;

class AccountViewController extends Controller {
    public function welcome() { return view('vazilla-home'); }
}