<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model {

    protected $fillable = [
        'name',
        'file_name',
        'file_size',
        'file_type',
        'url',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

}
