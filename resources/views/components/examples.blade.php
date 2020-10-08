<li class="nav-main-heading">
    <span class="sidebar-mini-visible">VR</span><span class="sidebar-mini-hidden">DEVELOPMENT</span>
</li>
<li class="{{ request()->is('examples/*') ? ' open' : '' }}">
    <a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-bulb"></i><span class="sidebar-mini-hide">Examples</span></a>
    <ul>
        @foreach($examples as $row)
            <li><a class="{{ request()->is('examples/'.$row) ? ' active' : '' }}" href="/examples/{{$row}}">{{ucfirst($row)}}</a></li>
        @endforeach
    </ul>
</li>

