        <header id="page-header" style="z-index:9999999; background-color: rgba(0, 0, 0, 0.8); -webkit-backdrop-filter: blur(8px)">

                <!-- Header -->
                <div class="content-header" style="height:50px;">

                    <!-- Left -->
                    <div class="content-header-section">

                        <!-- Logo -->
                        <div class="content-header-item">
                            <a class="font-w700 mr-5" href="/">
                                <img width="32" height="32" src="/assets/images/icons/icon.png" alt="logo" style="margin-top:-10px"/>
                                <span class="font-size-xl f400 shad text-dual-primary-dark">asd</span><span class="font-size-xl f300 shad text-white">asd</span>
                            </a>
                        </div>
                        <!-- ! Logo -->

                    </div>
                    <!-- ! Left -->

                    <!-- Middle -->
                    <div class="content-header-section d-none d-lg-block">

                        <!-- Navigation -->
                        <ul class="nav-main-header">
                           <x-navigation/>
                        </ul>
                        <!-- ! Navigation -->

                    </div>
                    <!-- ! Middle Section -->

                    <!-- Right  -->
                    <div class="content-header-section">

                        <div class="btn-group ml-5" role="group">

                            <!--<button type="button" class="btn btn-circle btn-dual-secondary" id="page-header-themes-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-paint-brush"></i>
                            </button>

                            <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="header_search_on">
                                <i class="fa fa-search"></i>
                            </button>-->

@guest
                            <a href="/login" class="btn btn-dual-secondary">
                               {{ ucfirst(__('index.sign-in')) }}
                            </a>
 @else

                            <!-- User Dropdown -->
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user d-sm-none"></i>
                                    <span class="d-none d-sm-inline-block">{{ ucfirst(Auth::user()->name) }}</span>
                                    <i class="fa fa-angle-down ml-5"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right min-width-200 pb-0" aria-labelledby="page-header-user-dropdown">
                                    <h5 class="h6 text-center pt-5 pb-15 mb-5 border-b text-uppercase">{{ ucfirst(__('index.user')) }}</h5>
                                    <a class="dropdown-item" href="/profile">
                                        <i class="si si-user mr-5"></i> {{ ucfirst(__('index.profile')) }}
                                    </a>
                                    <!--<a class="dropdown-item d-flex align-items-center justify-content-between" href="">
                                        <span><i class="si si-envelope-open mr-5"></i> {{ ucfirst(__('index.inbox')) }}</span>
                                        <span class="badge badge-primary">3</span>
                                    </a>
                                    <a class="dropdown-item" href="">
                                        <i class="si si-note mr-5"></i> {{ ucfirst(__('index.invoices')) }}
                                    </a>
                                    <div class="dropdown-divider mt-0"></div>

                                    <a class="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                        <i class="si si-wrench mr-5"></i> {{ ucfirst(__('index.settings')) }}
                                    </a>-->

                                    <div class="dropdown-divider mt-0"></div>
                                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                        <i class="si si-logout mr-5"></i> {{ ucfirst(__('index.logout')) }}
                                    </a>

                                </div>
                            </div>
                            <!-- ! User Dropdown -->
  @endguest

                            <!-- Language Dropdown -->
                            <div class="btn-group" role="group">
                                <button type="button" class="font-w300 btn btn-dual-secondary" id="page-header-lang-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="si si-globe"></i>&nbsp; {{ strtoupper(app()->getLocale()) }}
                                    <i class="fa fa-angle-down ml-5"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right pb-15" style="width:340px" aria-labelledby="page-header-lang-dropdown">
                                    <h5 class="h6 text-center pt-5 pb-10 mb-5 border-b text-uppercase">{{ __('index.language') }}</h5>
@foreach(config('global.languages') as $lang)
                                    <div style="float:left;width:160px;height:32px;padding:10px;overflow:hidden">
                                        <a style="padding:4px;overflow:hidden;color:#334455" href="{{ url('locale/'.$lang) }}">
                                            <img src="/assets/images/flags/{{ $lang }}.png" width="22" style="margin-top:-3px;margin-right:2px" alt="Language {{ $lang }}"/> {{ ucfirst(__('languages.lang-'.$lang)) }}
                                        </a>
                                    </div>
@endforeach
                                </div>
                            </div>
                            <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
                                <i class="fa fa-navicon"></i>
                            </button>
                            <!-- ! Toggle Sidebar -->

                        </div>
                        <!-- ! Right Section -->
                    </div>
                    <!-- ! Header Content -->

                    <!-- Header Search -->
                    <div id="page-header-search" class="overlay-header">
                        <div class="content-header content-header-fullrow">
                            <form action="bd_search.html" method="post">
                                <div class="input-group">
                                    <div class="input-group-prepend">

                                        <!-- Close Search Section -->
                                        <button type="button" class="btn btn-secondary px-15" data-toggle="layout" data-action="header_search_off">
                                            <i class="fa fa-times"></i>
                                        </button>
                                        <!-- ! Close Search Section -->

                                    </div>
                                    <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input">
                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-secondary px-15">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- ! Header Search -->

                    <!-- Header Loader -->
                    <div id="page-header-loader" class="overlay-header bg-primary">
                        <div class="content-header content-header-fullrow text-center">
                            <div class="content-header-item">
                                <i class="fa fa-sun-o fa-spin text-white"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Logout functionality -->
                    <script>function logout() { document.getElementById('logout-form').submit(); }</script>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>

                </div>
                <!-- ! Header -->

            </header>
