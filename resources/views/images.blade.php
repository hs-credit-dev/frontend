@extends('layouts.dashboard')

@section('content')

    <div class="content">

        <div class="col-md-8">

                <div class="">
                    <form action="/images" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="file" name="image" id="image">
                        <button type="submit">Upload</button>
                    </form>
                </div>

                <div class="">
                    @foreach($data as $row)
                        <a href="/image/{{ $row->id }}"><img src="/thumb/{{ $row->id }}" width="150" height="150" style="background-color:white;padding:5px;margin:5px" /></a>
                    @endforeach
                </div>

        </div>

    </div>

@endsection
