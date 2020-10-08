@extends('layouts.html')

@section('body')

        <!-- Page -->
        <div id="page-container" class="sidebar-inverse page-header-glass page-header-fixed page-header-inverse main-content-boxed">

           <x-sidebar/>
           <x-support/>
            <!-- Site -->
           <x-header/>
            <!-- Main Container -->
            <main id="main-container" style="min-height:655px">
                @yield('content')
            </main>

            <!-- ! Footer -->
           <x-footer/>
        </div>
        <!-- ! Page -->

@endsection
