<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration {

    public function up() {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('name');
            $table->string('filename');
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('documents');
    }

}
