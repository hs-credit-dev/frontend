@isset($value)
    <div class="invisible" data-toggle="appear" data-class="animated fadeInUp" data-timeout="300">
        <?php if(!isset($value)) $value = ""; $a = explode(":",$value,2); if(count($a)<2) $a[1] = $a[0]; if(strpos($a[0],".")===false) $a[0] = "index.".$a[0]; ?>
        <a class="btn btn-hero {{ $class ?? "btn-sumo" }} text-uppercase my-10" href="{{ (substr($a[1],0,4)=="http"||substr($a[1],0,10)=="javascript") ? $a[1] : "/".$a[1] }}">
            {{ __($a[0]) }}
        </a>
    </div>
@endisset
