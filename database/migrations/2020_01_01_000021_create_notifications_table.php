<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration {

    public function up() {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('message');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('notifications');
    }

}
