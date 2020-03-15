const mix = require('laravel-mix');
mix.js('resources/js/admin/app.js', 'public/js/admin')
.js('resources/js/customer/app.js', 'public/js/customer')