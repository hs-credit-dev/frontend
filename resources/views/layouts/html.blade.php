<!doctype html>
<html lang="{{ app()->getLocale() }}" class="no-focus">

    <!-- Crafted with love by 3D Group Ltd - Contact support@3d.fi for a collaboration -->

    <!-- Head -->
    <head>

        <!-- Title -->
        <title>@if(!request()->segments())Sumo Apps - {{ __('index.title') }}@else{{ __(request()->segment(1).'.title')." - Sumo Apps" }}@endif</title>

        <!-- Meta info -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta name="description" content="@if(!request()->segments()){{ __('index.description') }}@else{{ __(request()->segment(1).'.description') }}@endif">
        <meta name="author" content="3D Group">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta property="og:site_name" content="3D">
        <meta property="og:title" content="@if(!request()->segments())3D - {{ __('index.title') }}@else{{ __(request()->segment(1).'.title')." - 3D" }}@endif">
        <meta property="og:description" content="@if(!request()->segments()){{ __('index.description') }}@else{{ __(request()->segment(1).'.description') }}@endif">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:image" content="/assets/images/icons/icon.png">
        <meta name="apple-mobile-web-app-title" content="3D">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/assets/images/icons/icon.png">
        <meta name="theme-color" content="#ffffff">
    @yield('meta_info')

        <!-- Icons -->
        <link rel="shortcut icon" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/icons/icon.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icons/icon.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="/assets/images/icons/icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/icons/icon.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/icons/icon.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/icons/icon.png">

        <!-- Default Styles -->
        @yield('css_before')<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,400i,600,700">
        <link rel="stylesheet" id="css-main" href="/vendor/codebase/codebase.css">
        <link rel="stylesheet" id="css-3d" href="/vendor/codebase/default.css">
    @yield('css_after')

        <!-- Scripts -->
        {!! "<script>window.Laravel = ".json_encode(['csrfToken' => csrf_token()]).";</script>" !!}

        @if(config('app.env')=="production")<!-- Google Analytics -->
        <script data-ad-client="ca-pub-9596156321013056" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122674145-1"></script>
        <script>function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-122674145-1")</script>
        @endif

    </head>

    <!-- Body -->
    <body>
        @yield('body')
        <!-- Scripts -->
@yield('js_before')
        <script src="/vendor/codebase/codebase.app.js"></script>
        @yield('js_after')

    </body>

</html>
