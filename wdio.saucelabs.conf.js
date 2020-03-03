exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    sauceConnect: true, // This needs to be 'true' for Skylight integration and release environments
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            appiumVersion: '1.15.0',
            deviceName: 'Samsung Galaxy Tab A 10 GoogleAPI Emulator',
            deviceOrientation: 'portrait',
            platformVersion: '8.1',
            platformName: 'Android',
            waitforTimeout: 600,
            commandTimeout: 600,
        },
        {
            browserName: 'Safari',
            appiumVersion: '1.15.0',
            deviceName: 'iPhone 11 Pro Simulator',
            deviceOrientation: 'portrait',
            platformVersion: '13.0',
            platformName: 'iOS',
            waitforTimeout: 600,
            commandTimeout: 600,
        }
    ],
    sync: true,
    logLevel: 'info',
    services:
        ['sauce'],
    framework: 'jasmine',
    reporters: ['spec']
};
