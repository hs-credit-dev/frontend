<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Cards\Help;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider {

    public function boot() {
        parent::boot();
    }

    protected function routes() {
        Nova::routes()->withAuthenticationRoutes()->withPasswordResetRoutes()->register();
    }

    protected function gate() {
        Gate::define('viewNova', function ($user) {
            return in_array($user->email, [
                "lauri@3d.fi",
            ]);
        });
    }

    protected function cards() {
        return [
            new Help,
        ];
    }

    protected function dashboards() {
        return [];
    }

    public function tools() {
        return [];
    }

    public function register() {

    }

}
