<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class License extends Model {

    protected $casts = [
        'billed_at' => 'date'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function school() {
        return $this->belongsTo('App\School');
    }

    public function app() {
        return $this->belongsTo('App\App');
    }


}
