let mix = require('laravel-mix');

mix
  .sass('src/sass/app.scss', 'css').options({
    processCssUrls: false
  })
  .combine([
    'src/js/header-footer.js',
    'src/js/skills-contacts.js',
    'src/js/scroll-to-top.js',
    'src/js/navigation-mobile.js'
  ], 'js/app.js');
