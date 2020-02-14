exports.config = {
	specs: [
		'./test/**/*.js'
	],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	maxInstances: 5,
	logLevel: 'info',
	services: ['sauce'],
	user: 'jeffhall1234',
	key: '46a2b968-7cbc-4e55-840c-4f7f0f3d16c2',
	sauceConnect: false,
	region: 'us',
	capabilities: [{
		"browserName": 'chrome',
		"browserVersion": 'latest',
		"platformName": 'Windows 10',
		"sauce:options": {}

	}],
}
