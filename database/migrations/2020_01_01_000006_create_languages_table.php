<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanguagesTable extends Migration {

    public function up() {
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index();
            $table->string('name');
            $table->string('code');
            $table->unsignedInteger('country_id')->default(0);
            $table->unsignedInteger('status')->default(1);
            $table->timestamps();
        });
        DB::table('languages')->insert([
            ['code' => 'ar', 'name' => 'Arabic'],
            ['code' => 'bn', 'name' => 'Bengali'],
            ['code' => 'zh', 'name' => 'Chinese'],
            ['code' => 'cs', 'name' => 'Czech'],
            ['code' => 'da', 'name' => 'Danish'],
            ['code' => 'nl', 'name' => 'Dutch'],
            ['code' => 'et', 'name' => 'Estonian'],
            ['code' => 'en', 'name' => 'English'],
            ['code' => 'fa', 'name' => 'Persian'],
            ['code' => 'fi', 'name' => 'Finnish'],
            ['code' => 'fr', 'name' => 'French'],
            ['code' => 'de', 'name' => 'German'],
            ['code' => 'el', 'name' => 'Greek'],
            ['code' => 'hi', 'name' => 'Hindi'],
            ['code' => 'hu', 'name' => 'Hungarian'],
            ['code' => 'id', 'name' => 'Indonesian'],
            ['code' => 'it', 'name' => 'Italian'],
            ['code' => 'ja', 'name' => 'Japanese'],
            ['code' => 'ko', 'name' => 'Korean'],
            ['code' => 'ms', 'name' => 'Malay'],
            ['code' => 'no', 'name' => 'Norwegian'],
            ['code' => 'pl', 'name' => 'Polish'],
            ['code' => 'pt', 'name' => 'Portuguese'],
            ['code' => 'ru', 'name' => 'Russian'],
            ['code' => 'es', 'name' => 'Spanish'],
            ['code' => 'sr', 'name' => 'Serbian'],
            ['code' => 'sv', 'name' => 'Swedish'],
            ['code' => 'th', 'name' => 'Thai'],
            ['code' => 'tl', 'name' => 'Tagalog'],
            ['code' => 'tr', 'name' => 'Turkish'],
            ['code' => 'us', 'name' => 'US english'],
            ['code' => 'vi', 'name' => 'Vietnamese']
        ]);
    }

    public function down() {
        Schema::dropIfExists('languages');
    }

}
