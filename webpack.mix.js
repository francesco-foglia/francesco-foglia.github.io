// Load Laravel Mix module
let mix = require('laravel-mix');

// Set public path for assets
mix
  .sass('src/sass/app.scss', 'css').options({
    processCssUrls: false
  })
  .combine([
    'src/js/header-footer.js',
    'src/js/navigation-mobile.js',
    'src/js/skills-contacts.js',
    'src/js/slider.js',
    'src/js/scroll-to-top.js',
  ], 'js/app.js');
