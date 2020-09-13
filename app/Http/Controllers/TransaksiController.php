<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pembayaran;
use App\Transaksi;

class TransaksiController extends Controller
{
    public function Get()
    {
        return Transaksi::all();
    }

    public function pembayaran()
    {
        return Pembayaran::with('transaksi.produk:id,nama_produk,harga_produk')->where('id_transaksi',$id)->get();
    }

    public function store()
    {
        $transaksi = Transaksi::create([
            'id_transaksi' => request('id'),
            'id_produk' => request('id_produk'),
        ]);

        return response()->json([
            'pesan' => 'Transaksi berhasil ditambahkan',
            'transaksi' => $transaksi,
        ]);
    }

    public function delete($id)
    {
        Transaksi::where('id_transaksi', $id)->delete();

        return response()->json([
            'pesan' => 'Transaksi berhasil dihapus'
        ]);
    }
}
