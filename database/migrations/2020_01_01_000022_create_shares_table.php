<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSharesTable extends Migration {

    public function up() {
        Schema::create('shares', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('work_id');
            $table->string('platform');
            $table->string('message')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('shares');
    }

}
