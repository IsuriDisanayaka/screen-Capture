var page = require('webpage').create();
page.open('https://github.com/IsuriDisanayaka/', function() {
  page.render('github.png');
  phantom.exit();
});