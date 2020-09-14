<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

class RoleController extends Controller
{
    public function Get()
    {
        return Role::all();
    }

    public function store()
    {
        $role = Role::create([
            'id_user' => request('id_user'),
            'nama_role' => request('nama'),
        ]);

        return response()->json([
            'pesan' => "Role telah ditambahkan",
            'role' => $role,
        ]);
    }

    public function update($id)
    {
        Role::where('id',$id)->update([
            'id_user' => request('id_user'),
            'nama_role' => request('nama'),
        ]);

        $role = Role::where('id',$id)->get();

        return response()->json([
            'pesan' => "Role telah diubah",
            'role' => $role,
        ]);
    }

    public function delete($id)
    {
        Role::where('id',$id)->delete();

        return response()->json([
            'pesan' => "Role telah dihapus"
        ]);
    }
}
