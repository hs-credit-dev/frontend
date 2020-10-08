@extends('layouts.simple')

@section('content')

    <x-page>

        <div id="form">
            <form method="POST">
                @csrf;

                <input id="name" type="text"/>
                {{ Form::text('description') }}

            </form>
            {{ $user->name }} <a href="/users/{{ $user->id }}/edit">edit</a>
        </div>

    </x-page>

@endsection
