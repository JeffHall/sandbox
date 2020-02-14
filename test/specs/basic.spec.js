const assert = require('assert')

describe('Skylight production home page', () => {
    it('should have the right title', () => {
        browser.url('https://ap-production.skylight.earth')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Skylight')
    })
})