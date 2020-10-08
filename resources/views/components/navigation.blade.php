    <li class="open">
                                <a class="nav-submenu{{ request()->is('apps') ? ' active' : '' }}" href="/apps"><i class="fa fa-star text-white"></i>{{ ucfirst(__('index.apps')) }}</a>
                                <ul style="width:170px">
                                    <li>
                                        <a class="font-w300" href="/flash" style="color:#cccccc"><img src="/assets/images/icons/icon.png" class="sumo-icon" alt="icon"/> <b class="text-sumo">Clever Music</b></a>
                                    </li>
                                    <li>
                                        <a class="font-w300" href="/flash" style="color:#cccccc"><img src="/assets/images/icons/icon.png" class="sumo-icon" alt="icon"/> <b class="text-sumo">Luretool</b></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <?php if(Auth::check()) $role = Auth::user()->role; else $role = 0; ?>
                                @if($role<2)
                                    <a class="{{ request()->is('pricing') ? ' active' : '' }}" href="/pricing"><i class="fa fa-tag text-white"></i>{{ ucfirst(__('index.pricing')) }}</a>
                                @else
                                    <a class="{{ request()->is('dashboard') ? ' active' : '' }}" href="/dashboard"><i class="fa fa-tag text-white"></i>{{ ucfirst(__('index.dashboard')) }}</a>
                                @endif
                            </li>
                            <li>
                                <a class="{{ request()->is('laravel') ? ' active' : '' }}" href="/code/laravel"><i class="fa fa-tag text-white"></i>Laravel</a>
                            </li>
