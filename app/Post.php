<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model {

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function image() {
        return $this->belongsTo('App\Image');
    }

    public function language() {
        return $this->belongsTo('App\Language');
    }

}
