module.exports = {
	url: 'https://www.amazon.com/',
	elements: {
		searchBar: {
			selector: '#twotabsearchtextbox',
		},
		searchButton: {
			selector: '#nav-search-submit-button',
		},
		resultsSubtitle: {
			selector:
				'//span[@class="rush-component"]//div//div[@tabindex="0"]//span[text()="RESULTS"]',
			locateStrategy: 'xpath',
		},
	},
	commands: [
		{
			searchAProduct: function (product) {
				console.log(product)
				return this.setValue('@searchBar', product)
					.assert.value('@searchBar', product)
					.click('@searchButton')
					.waitForElementVisible('@resultsSubtitle')
			},
		},
	],
}
