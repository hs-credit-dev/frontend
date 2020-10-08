<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration {

    public function up() {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('description');
            $table->longText('text');
            $table->string('keywords')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('image_id');
            $table->unsignedBigInteger('cover_id');
            $table->unsignedBigInteger('language_id');
            $table->unsignedInteger('status')->default(1);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('posts');
    }

}
