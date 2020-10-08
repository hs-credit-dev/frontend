<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable {

    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

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

    public function images() {
        return $this->hasMany('App\Image');
    }

    public function roles() {
        return $this->belongsToMany('App\Models\Role');
    }

    public function timeline() {
        return Tweet::where('user_id',$this->id)->latest()->get();
    }

    public function follow(User $user) {
        return $this->follows()->save($user);
    }

    public function followers() { // kesken
        //return $this->belongsToMany('App\Models\Role');
    }

    public function follows() {
        return $this->belongsToMany(User::class,'follows','user_id','target_id');
    }

    public function posts() {
        return $this->hasMany('App\Post');
    }

}
