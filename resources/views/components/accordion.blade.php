<!-- Single Item -->
<h2 class="content-heading">{{ $title ?? "" }}</h2>
<div class="block">
    <div class="block-header block-header-default">
        <h3 class="block-title">Single Item</h3>
    </div>
    <div class="block-content">
        <p>
            An accordion can have one active item at a time
        </p>
        <div id="accordion" role="tablist" aria-multiselectable="true">

            {{ $slot }}

        </div>
    </div>
</div>
<!-- ! Single Item -->
