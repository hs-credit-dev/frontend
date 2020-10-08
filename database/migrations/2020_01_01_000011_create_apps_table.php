<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppsTable extends Migration {

    public function up() {
        Schema::create('apps', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('code');
            $table->string('version')->nullable();
            $table->unsignedInteger('image_id')->default(0);
            $table->unsignedInteger('cover_id')->default(0);
            $table->unsignedInteger('views')->default(0);
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('apps');
    }

}
