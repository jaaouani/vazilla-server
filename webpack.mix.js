let mix = require('laravel-mix');

mix.react('resources/assets/js/vazilla.bundle.js', 'public/js/vazilla.bundle.js')
   .sass('resources/assets/sass/vazilla.bundle.scss', 'public/css/vazilla.bundle.css');
