<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration {

    public function up() {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('file_name');
            $table->unsignedInteger('file_size')->default(0);
            $table->string('file_type');
            $table->string('url');
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('images');
    }

}
