module.exports = {
	url: 'https://nightwatchjs.org/',
	elements: {
		installButton: {
			selector:
				'div[class="download"] div[class="container"] div[class="row"] div a',
		},
		titleLandingPage: {
			selector: 'h2',
		},
		gettingStartedContainer: {
			selector:
				'div[class="download"] div[class="container"] div[class="row"] div',
		},
	},
	commands: [
		{
			clickOnInstallButton: function () {
				return this.assert.visible('@titleLandingPage').click('@installButton')
			},
		},
	],
}
