<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\User;

class ProfileController extends Controller {
    private $request = null;
    private $user = null;
    private $validator = null;
    
    public function __construct(Request $request) {   $this->request = $request;  }

    public function retrieve() {}
    public function fullname() {}
    public function password() {}
    public function email() {}
}
