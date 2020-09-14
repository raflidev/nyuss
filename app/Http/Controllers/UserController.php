<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function Get()
    {
        return User::all();
    }

    public function store()
    {
        $user = User::create([
            'name' => request('nama'),
            'email' => request('email'),
            'password' => request('password'),
        ]);

        return response()->json([
            'pesan' => "User telah ditambahkan",
            'user' => $user,
        ]);
    }

    public function update($id)
    {
        User::where('id',$id)->update([
            'name' => request('nama'),
            'email' => request('email'),
            'password' => request('password'),
        ]);

        $user = User::where('id',$id)->get();

        return response()->json([
            'pesan' => "User telah diubah",
            'user' => $user,
        ]);
    }

    public function delete($id)
    {
        User::where('id',$id)->delete();

        return response()->json([
            'pesan' => "User telah dihapus"
        ]);
    }
}
