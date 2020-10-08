<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class School extends Model {

    protected $casts = [
        'billed_at' => 'date'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function country() {
        return $this->belongsTo('App\Country');
    }

    public function language() {
        return $this->belongsTo('App\Language');
    }

    public function image() {
        return $this->belongsTo('App\Image');
    }

    public function cover() {
        return $this->belongsTo('App\Image');
    }

}
