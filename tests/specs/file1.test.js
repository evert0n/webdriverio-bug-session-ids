var assert = require('assert');

describe('webdriver.io page test 1', function() {

  it('should have the right title - test 1', function () {
    browser.url('/');
    var title = browser.getTitle();
    assert(title.toLowerCase().match(/invalid/));
  });

});
