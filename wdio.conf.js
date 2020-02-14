exports.config = {
	specs: [
		'./test/**/*.js'
	],
	maxInstances: 5,
	logLevel: 'info',
	services: ['sauce'],
	user: process.env.SAUCE_USERNAME,
	key: process.env.SAUCE_ACCESS_KEY,
	sauceConnect: false,
	region: 'us',
	capabilities: [{
		"browserName": 'chrome',
		"browserVersion": 'latest',
		"platformName": 'Windows 10',
		"sauce:options": {}

	}],
}
