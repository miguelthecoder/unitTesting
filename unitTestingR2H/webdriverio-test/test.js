// importing webdriver 
const webdriverio = require('webdriverio');
// for now we're adding our capabilities
const options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
// testing website
// we are requiring webdriver 
webdriverio
    .remote(options)
    .init()
    // adding url being tested.
    .url('https://fios.verizon.com/')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
