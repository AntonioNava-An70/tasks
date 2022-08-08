describe('Task 2 Data Driven Testing', () => {
	const homePageAmazon = browser.page.homepageamazon()
	beforeEach(() => {
		browser.maximizeWindow()
	})

	// Delete Item
	it('Task 2', () => {
		var firstPrice, secondPrice, thirdPrice
		// Go to Amazon.com
		homePageAmazon
			.navigate()
			.assert.titleContains('Amazon.com')
			// Search for Samsung Galaxy Note 20
			.searchAProductfromJSON('amazonProduct.json')
			// Verify Item is displayed on the screen and  locate the first one, then store the price
			.assert.visible('@resultSection')
			.getText('@firstPricePartA', function (result) {
				firstPrice = `$${result.value}.`
			})
			.getText('@firstPricePartB', function (result) {
				firstPrice += result.value
				console.log('1st Price Obtained', firstPrice)
			})

		// Click on the First Result
		homePageAmazon.click('@firstProductLink')

		// Once in the details page compare this price vs the above one (first stored price)
		homePageAmazon.getText('@secondPrice', function (result) {
			secondPrice = result.value
			console.log('2nd Price Obtained', secondPrice)
			browser.assert.deepEqual(
				`${firstPrice}`,
				secondPrice,
				'Should be the same value'
			)
		})

		// Click on Add to Cart.
		homePageAmazon.clickOnAddToCart()

		// Go to Cart and verify again the price of the phone
		homePageAmazon.clickOnGoToCart()

		homePageAmazon
			.getText('@thirdPrice', function (result) {
				thirdPrice = result.value
				console.log('3th Price Obtained', thirdPrice)
			})
			.assert.deepEqual(
				secondPrice,
				thirdPrice,
				'Should be the same Price once Again'
			)

		// Delete Item
		homePageAmazon
			.click('@deleteActionOnCart')
			.assert.textContains('@cartTitle', 'Your Amazon Cart is empty.')
		after(() => {
			browser.end()
		})
	})
})
