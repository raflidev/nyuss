const mix = require("laravel-mix");

mix.js(
    "resources/js/app.js",
    "public/js"
).sass("resources/sass/app.scss",
"public/assets/css/style.css",
"public/assets/css/components.css",
"public/css");
mix.scripts([
    'public/assets/js/assets.js',
    'public/assets/js/page/index.js',
    'public/assets/js/bundle.js',
    'public/assets/js/scripts.js',
], 'public/js/all.js');
