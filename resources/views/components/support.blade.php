<!-- Notifications -->
<aside id="side-overlay" style="z-index:99999999;">

    <!-- Side Header -->
    <div class="content-header content-header-fullrow">
        <div class="content-header-section align-parent">

            <!-- ! User Info -->
            <button type="button" class="btn btn-circle btn-dual-secondary align-v-r" data-toggle="layout" data-action="side_overlay_close">
                <i class="fa fa-times text-black"></i>
            </button>
            <div class="content-header-item">
                <a class="img-link mr-5" href="/profile">
                    <img class="img-avatar img-avatar32" src="/assets/images/ui/avatar.jpg" alt="avatar">
                </a>
                <a class="align-middle link-effect text-primary-dark font-w600" href="/profile">{{ __("index.name") }}</a>
            </div>
            <!-- ! User Info -->

        </div>
    </div>
    <!-- ! Side Header -->

    <!-- Side Content -->
    <div class="content-side">
        <!-- Search -->
        <div class="block pull-t pull-r-l">
            <div class="block-content block-content-full block-content-sm bg-body-light">
                <form action="be_pages_generic_search.html" method="post">
                    <div class="input-group">
                        <input type="text" class="form-control" id="side-overlay-search" name="side-overlay-search" placeholder="{{ __("index.search") }}...">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary px-10">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- ! Search -->

        <!-- Mini Stats -->
        <div class="block pull-r-l">
            <div class="block-content block-content-full block-content-sm bg-body-light">
                <div class="row">
                    <div class="col-4">
                        <div class="font-size-sm font-w600 text-uppercase text-muted">{{ __("index.images") }}</div>
                        <div class="font-size-h4">460</div>
                    </div>
                    <div class="col-4">
                        <div class="font-size-sm font-w600 text-uppercase text-muted">{{ __("index.videos") }}</div>
                        <div class="font-size-h4">728</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ! Mini Stats -->

        <!-- Friends -->
        <div class="block pull-r-l">
            <div class="block-header bg-body-light">
                <h3 class="block-title"><i class="fa fa-fw fa-users font-size-default mr-5"></i>{{ __("index.friends") }}</h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                        <i class="si si-refresh"></i>
                    </button>
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                </div>
            </div>
            <div class="block-content">
                <ul class="nav-users push">
                    <li>
                        <a href="/user">
                            <img class="img-avatar" src="/assets/images/ui/avatar.jpg" alt="avatar">
                            <i class="fa fa-circle text-success"></i> Sumo Support
                            <div class="font-w400 font-size-xs text-muted">Photographer</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- ! Friends -->

        <!-- Activity -->
        <div class="block pull-r-l">
            <div class="block-header bg-body-light">
                <h3 class="block-title">
                    <i class="fa fa-fw fa-clock-o font-size-default mr-5"></i>{{ __("index.activity") }}
                </h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                        <i class="si si-refresh"></i>
                    </button>
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                </div>
            </div>
            <div class="block-content">
                <ul class="list list-activity">
                    <li>
                        <i class="si si-wallet text-success"></i>
                        <div class="font-w600">+$4 Subscription</div>
                        <div>
                            <a href="javascript:void(0)">Invoice</a>
                        </div>
                        <div class="font-size-xs text-muted">5 min ago</div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- ! Activity -->

        <!-- Profile -->
        <div class="block pull-r-l">
            <div class="block-header bg-body-light">
                <h3 class="block-title">
                    <i class="fa fa-fw fa-pencil font-size-default mr-5"></i>{{ __("index.profile") }}
                </h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                </div>
            </div>
            <div class="block-content">
                <form action="/dashboard" method="post" onsubmit="return false;">
                    <div class="form-group mb-15">
                        <label for="side-overlay-profile-name">{{ __("index.name") }}</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="side-overlay-profile-name" name="side-overlay-profile-name" placeholder="{{ __("index.name") }}..." value="">
                            <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-user"></i>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group mb-15">
                        <label for="side-overlay-profile-email">{{ __("index.e-mail") }}</label>
                        <div class="input-group">
                            <input type="email" class="form-control" id="side-overlay-profile-email" name="side-overlay-profile-email" placeholder="{{ __("index.email") }}..." value="">
                            <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group mb-15">
                        <label for="side-overlay-profile-password">{{ __("index.password") }}</label>
                        <div class="input-group">
                            <input type="password" class="form-control" id="side-overlay-profile-password" name="side-overlay-profile-password" placeholder="{{ __("index.password") }}...">
                            <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-asterisk"></i>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group mb-15">
                        <label for="side-overlay-profile-password-confirm">{{ __("index.confirm-password") }}</label>
                        <div class="input-group">
                            <input type="password" class="form-control" id="side-overlay-profile-password-confirm" name="side-overlay-profile-password-confirm" placeholder="{{ __("index.confirm-password") }}...">
                            <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-asterisk"></i>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-6">
                            <button type="submit" class="btn btn-block btn-alt-primary">
                                <i class="fa fa-refresh mr-5"></i> {{ __("index.update") }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- ! Profile -->

        <!-- Settings -->
        <div class="block pull-r-l">
            <div class="block-header bg-body-light">
                <h3 class="block-title">
                    <i class="fa fa-fw fa-wrench font-size-default mr-5"></i>{{ __("index.settings") }}
                </h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                </div>
            </div>
            <div class="block-content">
                <div class="row gutters-tiny">
                    <div class="col-6">
                        <div class="custom-control custom-checkbox mb-5">
                            <input type="checkbox" class="custom-control-input" id="side-overlay-settings-status" name="side-overlay-settings-status" value="1" checked>
                            <label class="custom-control-label" for="side-overlay-settings-status">{{ __("index.online-status") }}</label>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="custom-control custom-checkbox mb-5">
                            <input type="checkbox" class="custom-control-input" id="side-overlay-settings-updates" name="side-overlay-settings-updates" value="1">
                            <label class="custom-control-label" for="side-overlay-settings-updates">{{ __("index.newsletters") }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ! Settings -->

    </div>
    <!-- ! Side Content -->

</aside>
