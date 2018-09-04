var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js', 'Error: The title is not compliant');
    });
    it('should have the correct h2 text', function () {
        browser.url('http://webdriver.io/');
        var header = browser.getText('header > h2');
        assert.equal(header, 'WebDriver bindings for Node.js', 'Error: The h2 text is incorrect');
    });
    it('should have the webdriver image', function () {
        browser.url('http://webdriver.io/');
        var headerImage = browser.getAttribute(' header > img', 'src');
        console.log(headerImage);
        assert.equal(headerImage, 'http://webdriver.io/images/webdriverio.png', 'Error: The header image source is incorrect');
    });
});
