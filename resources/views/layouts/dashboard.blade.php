@extends('layouts.html')

@section('body')

        <div id="page-container" class="sidebar-o sidebar-inverse enable-page-overlay side-scroll page-header-fixed page-header-inverse">

            <x-support />

            <!-- Sidebar -->
            <nav id="sidebar">
                <!-- Sidebar Content -->
                <div class="sidebar-content">
                    <!-- Side Header -->
                    <div class="content-header content-header-fullrow px-15" style="height:50px">
                        <!-- Mini Mode -->
                        <div class="content-header-section sidebar-mini-visible-b">
                            <!-- Logo -->
                            <span class="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                                <span class="text-dual-primary-dark">c</span><span class="text-primary">b</span>
                            </span>
                            <!-- END Logo -->
                        </div>
                        <!-- END Mini Mode -->

                        <!-- Normal Mode -->
                        <div class="content-header-section text-center align-parent sidebar-mini-hidden">
                            <!-- Close Sidebar, Visible only on mobile screens -->
                            <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                            <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                                <i class="fa fa-times text-danger"></i>
                            </button>
                            <!-- END Close Sidebar -->

                            <div style="margin-top:-7px;margin-left:-6px">
                                <input type="text" placeholder="Search from site..." style="width:212px;height:30px;padding-left:8px;background-color:rgba(0,0,0,0.3);border:0px;border-radius:3px;color:#eeeeee"/>
                            </div>

                        </div>
                        <!-- END Normal Mode -->
                    </div>
                    <!-- END Side Header -->

                    <!-- Side User -->
                    <div class="content-side content-side-full content-side-user px-10 align-parent">
                        <!-- Visible only in mini mode -->
                        <div class="sidebar-mini-visible-b align-v animated fadeIn">
                            <img class="img-avatar img-avatar32" src="/assets/images/ui/avatar.jpg" alt="avatar">
                        </div>
                        <!-- END Visible only in mini mode -->

                        <!-- Visible only in normal mode -->
                        <div class="sidebar-mini-hidden-b text-center">
                            <a class="img-link" href="javascript:void(0)">
                                <img class="img-avatar" src="/assets/images/ui/avatar.jpg" alt="avatar">
                            </a>
                            <ul class="list-inline mt-10">
                                <li class="list-inline-item">
                                    <a class="link-effect text-dual-primary-dark font-size-sm font-w600 text-uppercase" href="/login">
                                        @guest
                                            {{ __("index.sign-in") }}
                                        @else
                                            {{ Auth::user()->name }}
                                        @endguest
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                                    <a class="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                        <i class="si si-drop"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="link-effect text-dual-primary-dark" href="javascript:logout()">
                                        <i class="si si-logout"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- END Visible only in normal mode -->
                    </div>
                    <!-- END Side User -->

                    <!-- Side Navigation -->
                    <div class="content-side content-side-full">
                        <ul class="nav-main">
                            <li>
                                <a class="{{ request()->is('dashboard') ? ' active' : '' }}" href="/dashboard">
                                    <i class="si si-cup"></i><span class="sidebar-mini-hide">{{ __("index.dashboard") }}</span>
                                </a>
                            </li>

                            @if(isset($examples)||Request::segment(1)=='examples')
                                <x-examples :examples="$examples" />
                            @endif

                            <li class="nav-main-heading">
                                <span class="sidebar-mini-visible">MR</span><span class="sidebar-mini-hidden">{{ __("index.apps") }}</span>
                            </li>
                        </ul>
                    </div>
                    <!-- END Side Navigation -->
                </div>
                <!-- Sidebar Content -->
            </nav>
            <!-- END Sidebar -->

            <x-header/>

            <main id="main-container" style="padding-top:50px">
                @yield('content')
            </main>

            <x-footer/>

        </div>

        @yield('modal')

@endsection
