<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLicensesTable extends Migration {

    public function up() {
        Schema::create('licenses', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->unsignedInteger('school_id')->default(0);
            $table->unsignedInteger('app_id')->default(0);
            $table->unsignedInteger('status')->default(1);
            $table->timestamp('billed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('licenses');
    }

}
