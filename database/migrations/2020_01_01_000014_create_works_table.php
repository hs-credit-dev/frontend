<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorksTable extends Migration {

    public function up() {
        Schema::create('works', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('name');
            $table->string('slug');
            $table->string('tags')->nullable();
            $table->string('description')->nullable();
            $table->unsignedInteger('app_id')->default(0);
            $table->unsignedInteger('image_id')->default(0);
            $table->unsignedInteger('view_count')->default(0);
            $table->unsignedInteger('like_count')->default(0);
            $table->unsignedInteger('share_count')->default(0);
            $table->unsignedInteger('comment_count')->default(0);
            $table->unsignedInteger('report_count')->default(0);
            $table->unsignedInteger('file_name')->default(0);
            $table->unsignedInteger('file_size')->default(0);
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('works');
    }

}
