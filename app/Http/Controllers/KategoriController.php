<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Kategori;

class KategoriController extends Controller
{
    public function Get()
    {
        return Kategori::all();
    }

    public function store()
    {
        $kategori = Kategori::create([
            'id_produk' => request('id_produk'),
            'nama_kategori' => request('nama')
        ]);

        return response()->json([
            'pesan' => "kategori baru telah ditambahkan",
            'kategori' => $kategori,
        ]);
    }

    public function update($id)
    {
        Kategori::where('id', $id)->update([
            'id_produk' => request('id_produk'),
            'nama_kategori' => request('nama')
        ]);

        $kategori = Kategori::where('id', $id)->get();

        return response()->json([
            'pesan' => "kategori berhasil diubah",
            'kategori' => $kategori,
        ]);
    }

    public function delete($id)
    {
        Kategori::where('id', $id)->delete();

        return response()->json([
            'pesan' => "kategori berhasil dihapus"
        ]);
    }
}
