<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolsTable extends Migration {

    public function up() {
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('name');
            $table->string('code')->unique();
            $table->string('description')->nullable();
            $table->string('email')->unique();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('street_address')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('city')->nullable();
            $table->string('url')->nullable();
            $table->unsignedInteger('image_id')->default(0);
            $table->unsignedInteger('cover_id')->default(0);
            $table->unsignedInteger('country_id')->default(0);
            $table->unsignedInteger('language_id')->default(0);
            $table->timestamp('billed_at')->nullable();
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('schools');
    }

}
