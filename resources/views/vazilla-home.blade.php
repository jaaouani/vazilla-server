<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <link rel="stylesheet" type="text/css" href="{{ asset('css/vazilla.bundle.css') }}" />
        <title>Vazilla | @yield('title')</title>
    </head>
    <body>
        <div id="vazilla-root">
        </div>
        <script src="{{ asset('js/vazilla.bundle.js') }}" type="text/javascript"></script>
    </body>
</html>
