<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTweetsTable extends Migration {

    public function up() {
        Schema::create('tweets', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('tweet');
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('tweets');
    }

}
