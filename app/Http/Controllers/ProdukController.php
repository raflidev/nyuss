<?php

namespace App\Http\Controllers;
use App\Produk;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    public function Get()
    {
        return Produk::all();
    }

    public function Promo()
    {
        return Produk::with('promo:id_produk,diskon')->get();
    }
    public function Category()
    {
        return Produk::with('kategori:id_produk,nama_kategori')->get();
    }
    public function All()
    {
        return Produk::with('promo:id_produk,diskon','kategori:id_produk,nama_kategori')->get();
    }
    public function Where($id)
    {
        return Produk::where('id', $id)->get();
    }
    public function store(Request $request)
    {
        $produk = Produk::create([
            'nama_produk' => request('nama'),
            'harga_produk' => request('harga'),
            'stok_produk' => request('stok')
        ]);

        return response()->json([
            'pesan' => 'produk berhasil ditambahkan',
            'produk' => $produk,
        ]);
    }

    public function update($id)
    {
        Produk::where('id', $id)->update([
            'nama_produk' => request('nama'),
            'harga_produk' => request('harga'),
            'stok_produk' => request('stok')
        ]);

        $produk = Produk::where('id',$id)->get();

        return response()->json([
            'pesan' => 'produk berhasil diubah',
            'produk' => $produk,
        ]);
    }
    public function delete($id)
    {
        Produk::where('id', $id)->delete();

        return response()->json([
            'pesan' => 'produk berhasil dihapus',
        ]);
    }
}
