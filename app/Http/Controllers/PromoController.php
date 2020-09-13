<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Promo;

class PromoController extends Controller
{
    public function Get()
    {
        return Promo::all();
    }

    public function store()
    {
        $promo = Promo::create([
            'id_produk' => request('id_produk'),
            'diskon' => request('diskon')
        ]);

        return response()->json([
            "pesan" => "promo berhasil ditambahkan",
            "promo" => $promo
        ]);
    }

    public function update($id)
    {
        Promo::where('id', $id)->update([
            'id_produk' => request('id_produk'),
            'diskon' => request('diskon')
        ]);

        $promo = Promo::where('id', $id)->get();

        return response()->json([
            'pesan' => "promo berhasil diubah",
            'promo' => $promo,
        ]);
    }

    public function delete($id)
    {
        Promo::where('id', $id)->delete();

        return response()->json([
            'pesan' => "promo berhasil dihapus"
        ]);
    }

}
