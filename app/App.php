<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class App extends Model {

    protected $fillable = [
        'name',
        'description',
        'code',
    ];

    public function image() {
        return $this->belongsTo('App\Image');
    }

    public function cover() {
        return $this->belongsTo('App\Image');
    }

}
