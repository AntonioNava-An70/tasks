describe('Demo Running multiple Scripts', () => {
	const nightwatch = browser.page.landingpage()
	const quickstart = browser.page.quickstart()
	const blogpage = browser.page.blogpage()

	beforeEach(() => {
		browser.windowMaximize()
	})

	it('First Test Case', () => {
		//Step 1: Go to https://nightwatchjs.org/
		nightwatch
			.navigate()
			.assert.urlEquals('https://nightwatchjs.org/')
			.assert.titleEquals(
				'Nightwatch.js | Node.js powered End-to-End testing framework'
			)
			//Step 2: Click on Install button (Getting Started)
			.clickOnInstallButton()
			.assert.urlEquals(
				'https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html'
			)
		//Step 3: In the Search Bar type and search for "Asserts"
		quickstart
			.performSearch('Asserts')
			//Step 4: Click on the First Result search option
			.clickOnFirstElementInSearchList()
			//Step 5: Verify the "API Commands" Header exists
			.verify.textEquals('@apiReferenceLink', 'API Reference')
			//Step 6: Go to Blog
			.clickOnBlogLink()
		//Step 7: Scroll down to the bottom of the page and verify the following text exists
		const expectedTextUpdated =
			'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.'
		blogpage
			.getText('@footerAboutText', function (result) {
				this.assert.equal(
					result.value,
					expectedTextUpdated,
					'Text content should be the expected'
				)
			})
			.end()
	})
})
