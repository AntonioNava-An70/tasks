module.exports = {
	url: 'https://www.amazon.com/',
	elements: {
		searchBar: {
			selector: '#twotabsearchtextbox',
		},
		searchButton: {
			selector: '#nav-search-submit-button',
		},
		resultSection: {
			selector: 'div[cel_widget_id="MAIN-SEARCH_RESULTS-1"]',
		},
		addToCartButton: {
			selector: '//*[@id="addToCart_feature_div"]/div[1]',
			locateStrategy: 'xpath',
		},
		resultsSubtitle: {
			selector:
				'//span[@class="rush-component"]//div//div[@tabindex="0"]//span[text()="RESULTS"]',
			locateStrategy: 'xpath',
		},

		firstPricePartA: {
			selector:
				'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//span[@class="a-price-whole"]',
			locateStrategy: 'xpath',
		},

		firstPricePartB: {
			selector:
				'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//span[@class="a-price-fraction"]',
			locateStrategy: 'xpath',
		},
		secondPrice: {
			selector:
				'//*[@id="corePrice_feature_div"]/div/span/span[2]/span[@class="a-price-whole"]',
			locateStrategy: 'xpath',
		},
		secondPrice2: {
			selector:
				'//span[@class="a-label a-checkbox-label"]//div[@data-rows="1"]//span//b[contains(text(),"This item")]//parent::span//parent::div//following-sibling::div//div//div//span//span',
			locateStrategy: 'xpath',
		},
		thirdPrice: {
			selector:
				'//div[@id="sw-subtotal"]//span//span[@class="a-price sw-subtotal-amount"]//span[@class="a-offscreen"]',
			locateStrategy: 'xpath',
		},
		firstProductLink: {
			selector:
				'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//a[@class="a-link-normal s-no-outline"]',
			locateStrategy: 'xpath',
		},
		cartTitle: {
			selector: '//div[@class="a-row"]//h1',
			locateStrategy: 'xpath',
		},
		deleteActionOnCart: {
			selector:
				'//form[@id="activeCartViewForm"]//div[@data-name="Active Items"]//div[@class="sc-list-item-content"]//div//div[@class="a-column a-span10"]//div//div//div//div[@class="a-row sc-action-links"]//span[@data-action="delete"]//span//input',
			locateStrategy: 'xpath',
		},
	},
	commands: [
		{
			searchAProductfromJSON: function (filename) {
				const { product } = getData(filename)
				return this.setValue('@searchBar', product)
					.assert.valueEquals('@searchBar', product)
					.click('@searchButton')
					.waitForElementVisible('@resultsSubtitle')
			},
			obtainFirstPrice: function () {
				var value = ''
				this.getText('@firstPricePartA', function (result) {
					value = `$${result.value}.`
				}).getText('@firstPricePartB', function (result) {
					value += result.value
				})

				return value
			},
			obtainSecondPrice: function () {
				var value = ''
				this.getText('@secondPrice', function (result) {
					value = result.value
				})

				return value
			},
			clickOnAddToCart: function () {
				return this.click('@addToCartButton').assert.urlContains('/cart')
			},
			clickOnGoToCart: function () {
				return this.click('xpath', '//*[@id="sw-gtc"]')
					.assert.urlContains('/cart')
					.assert.textContains('@cartTitle', 'Shopping Cart')
			},

			obtainThirdPrice: function () {
				var value = ''
				browser.getText(
					'xpath',
					'//*[@id="sc-subtotal-amount-activecart"]/span',
					function (result) {
						value = result.value
					}
				)

				return value
			},
			clickOnFirstResultItem: function () {
				this.waitForElementVisible(
					'xpath',
					'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//a[@class="a-link-normal s-no-outline"]'
				).click(
					'xpath',
					'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//a[@class="a-link-normal s-no-outline"]'
				)
			},
		},
	],
}
function getData(filename) {
	return require(`../../dataExternal/${filename}`)
}
