@extends('layouts.simple')

@section('content')

    <x-page>

        <div class="card uper">
            <div class="card-header">
                Add user
            </div>
            <div class="card-body">
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div><br />
                @endif
                <form method="post" action="{{ route('users.store') }}">
                    @csrf
                    <div class="form-group">
                        <label for="name">Share Name:</label>
                        <input type="text" class="form-control" name="share_name"/>
                    </div>
                    <div class="form-group">
                        <label for="price">Share Price :</label>
                        <input type="text" class="form-control" name="share_price"/>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Share Quantity:</label>
                        <input type="text" class="form-control" name="share_qty"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        </div>

    </x-page>

@endsection
