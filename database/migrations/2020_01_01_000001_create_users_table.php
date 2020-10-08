<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {

    public function up() {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('role')->default(1);
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('username')->nullable();
            $table->string('password');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('street_address')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('city')->nullable();
            $table->unsignedInteger('country_id')->default(0);
            $table->unsignedInteger('language_id')->default(0);
            $table->string('facebook_id')->nullable();
            $table->string('twitter_id')->nullable();
            $table->string('google_id')->nullable();
            $table->string('linkedin_id')->nullable();
            $table->string('github_id')->nullable();
            $table->unsignedInteger('image_id')->default(0);
            $table->unsignedInteger('cover_id')->default(0);
            $table->unsignedInteger('points')->default(0);
            $table->unsignedInteger('credits')->default(0);
            $table->unsignedInteger('following')->default(0);
            $table->unsignedInteger('followed')->default(0);
            $table->string('newsletter_sent_at')->nullable();
            $table->timestamp('billed_at')->nullable();
            $table->timestamp('featured_at')->nullable();
            $table->unsignedInteger('status')->default(1);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('users');
    }

}
