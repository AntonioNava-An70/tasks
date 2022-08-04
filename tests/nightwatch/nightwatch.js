describe('Demo Running multiple Scripts', () => {
	const nightwatch = browser.page.landingpage()
	const quickstart = browser.page.quickstart()

	beforeEach(() => {
		browser.windowMaximize()
	})
	it('Check whether Susciption fieldcan be filled', () => {
		nightwatch
			.navigate()
			.assert.urlEquals('https://nightwatchjs.org/')
			.assert.titleEquals(
				'Nightwatch.js | Node.js powered End-to-End testing framework'
			)
			.assert.visible('@titleLandingPage')

			.click('@installButton')
		quickstart.assert
			.urlEquals(
				'https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html'
			)
			.click('@searchButton')
			.assert.enabled('@searchBar')
			.setValue('@searchBar', 'test')
			.assert.valueEquals('@searchBar', 'test')
	})
})
