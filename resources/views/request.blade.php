@extends('layouts.simple')

@section('content')

    <div class="container text-center">

        @if(request("name"))
        <br>{{ request("name") }}
        @endif

    </div>

@endsection
