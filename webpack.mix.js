const mix = require('laravel-mix');


mix.js(
    "resources/js/app.js",
    "public/js"
).sass("resources/sass/app.scss",
"public/css");

mix.styles([
    "public/assets/css/style.css",
    "public/assets/css/components.css",
], 'public/css/all.css');

mix.scripts([
    'public/assets/js/scripts.js',
    'public/assets/js/bundle.js',
], 'public/js/all.js');
