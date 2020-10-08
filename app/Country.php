<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model {

    protected $fillable = [
        'name',
        'code',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function language() {
        return $this->belongsTo('App\User');
    }

}
