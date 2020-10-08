<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Code extends Model {

    protected $fillable = [
        'name',
        'description',
        'code',
    ];

    public function user() {
        return $this->hasOne('App\User');
    }

}
