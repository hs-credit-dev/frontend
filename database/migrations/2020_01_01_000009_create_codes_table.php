<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCodesTable extends Migration {

    public function up() {
        Schema::create('codes', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('code');
            $table->unsignedInteger('amount');
            $table->unsignedInteger('discount');
            $table->unsignedInteger('used')->default(0);
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('codes');
    }

}
