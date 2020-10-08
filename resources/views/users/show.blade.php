@extends('layouts.simple')

@section('content')

    <x-page>

        <div id="user">
            {{ $user->name }} <a href="/users/{{ $user->id }}/edit">edit</a>
        </div>

    </x-page>

@endsection
