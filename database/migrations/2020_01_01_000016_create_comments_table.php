<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration {

    public function up() {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('comment');
            $table->unsignedInteger('work_id')->default(0);
            $table->unsignedInteger('comment_id')->default(0);
            $table->unsignedInteger('language_id')->default(0);
            $table->unsignedInteger('like_count')->default(0);
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('comments');
    }

}
