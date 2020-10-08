<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration {

    public function up() {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('messaging_user_id');
            $table->string('message');
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('messages');
    }

}
