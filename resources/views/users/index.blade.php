@extends('layouts.simple')

@section('content')

    <x-page>

        <div id="users">
            @foreach ($users as $user)
                <div class="p-5 content">
                    <a href="/users/{{ $user->id }}">{{ $user->name }}</a>
                </div>
            @endforeach
        </div>

        {{ $users->links() }}

    </x-page>

@endsection
