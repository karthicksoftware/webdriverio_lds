var webdriverio = require('webdriverio');
var expect = require('chai').expect;

describe('Home page validation', function() {
    it('will validate Lotto title', function() {
        browser.url('/');
        var title = browser.getTitle();
        console.log('Title is :'+title);
        expect(title).to.be.equal('PCH Lotto | PowerPrize');
    });
});
