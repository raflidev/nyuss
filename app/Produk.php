<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    public function kategori()
    {
        return $this->hasManyThrough(Kategori::class, Produk::class, 'id', 'id_produk');
    }
    public function promo()
    {
        return $this->hasManyThrough(Promo::class, Produk::class, 'id', 'id_produk');
    }
}
