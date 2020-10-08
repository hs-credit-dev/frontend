@extends('layouts.html')

@section('body')

    <!-- Page -->
    <div id="page-container" class="main-content-boxed">

        <!-- Main Container -->
        <main id="main-container">
            @yield('content')
        </main>
        <!-- ! Main Container -->

    </div>
    <!-- ! Page -->

@endsection
