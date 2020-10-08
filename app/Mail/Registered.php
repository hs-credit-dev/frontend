<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Registered extends Mailable {

    use Queueable, SerializesModels;

    public $user;

    public function __construct() {

    }

    public function build() {
        return $this->view('mail.registered');
    }

}
