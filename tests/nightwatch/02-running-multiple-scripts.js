const homeSelectors = require('../../selectors/nightwatch/home')
const quickstartsSelectors = require('../../selectors/nightwatch/quickstarts')
const blogSelectors = require('../../selectors/nightwatch/blog')

describe('Demo Running multiple Scripts', () => {
	before(() => {
		browser.windowMaximize().init()
	})

	it('First Test Case', () => {
		//Step 1: Go to https://nightwatchjs.org/
		browser
			.navigateTo('https://nightwatchjs.org/')
			.assert.urlEquals('https://nightwatchjs.org/')
			.assert.titleEquals(
				'Nightwatch.js | Node.js powered End-to-End testing framework'
			)
			//Step 2: Click on Getting Started
			.waitForElementVisible(homeSelectors.gettingStartedContainer)
			.assert.attributeContains(
				homeSelectors.installButton,
				'href',
				'https://nightwatchjs.org/guide/getting-started/installation.html'
			)
			.click(homeSelectors.installButton)
			.assert.urlEquals(
				'https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html'
			)
			//Step 3: In the Search Bar type and search for "Asserts"
			.click(quickstartsSelectors.searchButton)
			.waitForElementVisible(quickstartsSelectors.searchModal)
			.sendKeys(quickstartsSelectors.searchBarModal, 'Asserts')

			//Step 4: Click on the First Result search option
			.waitForElementVisible(quickstartsSelectors.searchList)
			.click(quickstartsSelectors.firstItemSearchList)
			//Step 5: Verify the "API Commands" Header exists
			.useXpath()
			.verify.textEquals(quickstartsSelectors.apiReferenceLink, 'API Reference')
			//Step 6: Go to Blog
			.useXpath()
			.click(quickstartsSelectors.blogLink)
			.assert.title('Blog | Nightwatch.js')
		//Step 7: Scroll down to the bottom of the page and verify the following text exists
		// FIXME: The text seems to be updated (needed to verify if this is an expected change)
		// const expectedText =	'Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors.'
		const expectedTextUpdated =
			'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.'
		browser
			.useXpath()
			.getText(blogSelectors.footerAboutText, function (result) {
				this.assert.equal(
					result.value,
					expectedTextUpdated,
					'Text content should be the expected'
				)
			})
			.end()
	})
})
