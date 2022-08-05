module.exports = {
	url: 'https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html',
	elements: {
		searchButton: {
			selector: '#docsearch',
		},
		searchBar: {
			selector: '#docsearch-input',
		},
		searchModal: {
			selector: 'div[class="DocSearch-Modal"]',
		},
		searchBarModal: {
			selector: '#docsearch-input',
		},
		searchList: {
			selector: '#docsearch-list',
		},
		firstItemSearchList: {
			selector: '#docsearch-item-0',
		},
		apiReferenceLink: {
			selector: '//div[@id="navbartop"]//ul//li[3]',
			locateStrategy: 'xpath',
		},
		blogLink: {
			selector: '//div[@id="navbartop"]//ul//li//a[text()="Blog"]',
			locateStrategy: 'xpath',
		},
	},
	commands: [
		{
			performSearch: function (term) {
				return this.click('@searchButton')
					.assert.enabled('@searchBar')
					.setValue('@searchBar', term)
					.assert.valueEquals('@searchBar', term)
			},
			clickOnFirstElementInSearchList: function () {
				return this.waitForElementVisible('@searchList').click(
					'@firstItemSearchList'
				)
			},
			clickOnBlogLink: function () {
				return this.click('@blogLink').assert.titleEquals(
					'Blog | Nightwatch.js'
				)
			},
		},
	],
}
