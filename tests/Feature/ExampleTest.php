<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\User;

class ExampleTest extends TestCase {

    public function testBasicTest() {
        $response = $this->get('/');
        $response->assertStatus(200);

        // add user to database
        $user = factory(\App\User::class)->create([
            'name' => 'Lauri Koutaniemi',
        ]);

        // just test creatign 3 more random users with some comments
        $users = factory(\App\User::class, 3)->make()->each(function ($user) {
            //$user->posts()->save(factory(App\Post::class)->make());
        });
    }

}
