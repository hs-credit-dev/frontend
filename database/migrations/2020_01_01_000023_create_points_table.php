<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePointsTable extends Migration {

    public function up() {
        Schema::create('points', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('amount');
            $table->string('message');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('points');
    }

}
