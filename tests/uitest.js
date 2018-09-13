require('geckodriver');
require('chromedriver');
var assert = require('assert');
var driver;

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');


// run it once before tests
before(function(done) {
    this.timeout(0);
     driver = new webdriver.Builder()
        .forBrowser('firefox')
        .setChromeOptions()
        .setFirefoxOptions()
        .build();

    // error handling - if you want do st
    process.on('uncaughtException', function(err) {
        
        console.log("My error handler... " + err);

        if (driver) {
            //recording screenshot
            driver.takeScreenshot().then(function(img) {
                fs.writeFileSync("/tmp/test.png", new Buffer(img, 'base64'));
            });
        }
    });

    driver.get('http://google.com').then(function() {
        console.log("open google.com...");
        done();
    });
});

// run it once after tests
after(function(done) {
    this.timeout(0);
    driver.quit().then(done);
});

// tests
describe('Google Search', function() {
    it('should work', function(done) {
        this.timeout(0);
//        var searchBox = driver.findElement(webdriver.By.name('q'));
//        searchBox.sendKeys('webdriver\n').then(function() {
//            return searchBox.getAttribute('value');
//        }).then(function(value) {
//            assert.equal(value, 'webxdriver');
//            done();
//        });   
    });
});