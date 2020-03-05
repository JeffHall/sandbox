const assert = require('assert')

describe('Skylight production environment login', () => {

    beforeEach(function () {
        // Mobile emulator spawning via SauceLabs can be slow
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;
    });


    it('Title page value should be: Skylight', function (done) {
        browser.url('https://ap-production.skylight.earth/login?captcha=false')

        $('#username').setValue('jeffh@vulcan.com');
        $('#password').setValue('fluBdew8');
        $('.login .btn.primary').click();

        browser.pause(3000)
        const title = browser.getTitle()
        assert.strictEqual(title, 'Skylight')
    });

})