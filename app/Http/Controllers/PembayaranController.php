<?php

namespace App\Http\Controllers;
use App\Pembayaran;
use Illuminate\Http\Request;

class PembayaranController extends Controller
{

    public function Get()
    {
        return Pembayaran::all();
    }

    public function store()
    {
        $pembayaran = Pembayaran::create([
            'id_user' => request('id_user'),
            'id_transaksi' => request('id_transaksi'),
            'total_harga' => request('harga'),
            'total_bayar' => request('bayar'),
            'tanggal_bayar' => request('tanggal'),
        ]);

        return response()->json([
            'pesan' => "Data pembayaran berhasil ditambahkan",
            'pembayaran' => $pembayaran
        ]);
    }

    public function update($id)
    {
        Pembayaran::where('id', $id)->update([
            'id_user' => request('id_user'),
            'id_transaksi' => request('id_transaksi'),
            'total_harga' => request('harga'),
            'total_bayar' => request('bayar'),
            'tanggal_bayar' => request('tanggal'),
        ]);
    
        $pembayaran = Pembayaran::where('id', $id)->get();
        
        return response()->json([
            'pesan' => "Data pembayaran berhasil diubah",
            'pembayaran' => $pembayaran
        ]);
    }

    public function delete($id)
    {
        Pembayaran::where('id', $id)->delete();

        return response()->json([
            'pesan' => "Data pembayaran berhasil dihapus"
        ]);
    }
}
