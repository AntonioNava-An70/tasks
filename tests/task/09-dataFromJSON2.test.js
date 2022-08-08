describe('Task 2 Data Driven Testing', () => {
	const homePageAmazon = browser.page.homepageamazon()
	beforeEach(() => {
		browser.maximizeWindow()
	})

	// Delete Item
	it('Task 2', () => {
		var productValue = ''
		var secondPrice
		var thirdPrice
		// Go to Amazon.com
		homePageAmazon
			.navigate()
			.assert.titleEquals('Amazon.com. Spend less. Smile more.')
			// Search for Samsung Galaxy Note 20
			.searchAProduct('Samsung Galaxy Note 20')
			// Verify Item is displayed on the screen and  locate the first one, then store the price
			.assert.visible('div[cel_widget_id="MAIN-SEARCH_RESULTS-1"]')

			.useXpath()
			.getText(
				'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//span[@class="a-price-whole"]',
				function (result) {
					productValue = `$${result.value}.`
				}
			)
			.getText(
				'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//span[@class="a-price-fraction"]',
				function (result) {
					productValue += result.value
				}
			)
			// Click on the First Result
			.useXpath()
			.click(
				'//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]//a[@class="a-link-normal s-no-outline"]'
			)
			// Once in the details page compare this price vs the above one (first stored price)
			.useXpath()
			.getText(
				'//span[@class="a-label a-checkbox-label"]//div[@data-rows="1"]//span//b[contains(text(),"This item")]//parent::span//parent::div//following-sibling::div//div//div//span//span',
				function (result) {
					secondPrice = result.value
					browser.assert.deepEqual(`${productValue}`, secondPrice)
				}
			)
			// Click on Add to Cart.
			// browser.submit('#addToCart')

			.useXpath()
			.click('//*[@id="addToCart_feature_div"]/div[1]')
			// .click(
			// 	'//div[@id="buyBoxAccordion"]//div[@id="renewedTier2AccordionRow"]//div[@class="a-accordion-inner accordion-row-content"]//div//form//div//div[@id="addToCart_feature_div"]' |
			// 		'input[add-to-cart-button]'
			// )

			// Go to Cart and verify again the price of the phone
			.useXpath()
			.getText(
				'//div[@id="sw-subtotal"]//span//span[@class="a-price sw-subtotal-amount"]//span[@class="a-offscreen"]',

				function (result) {
					thirdPrice = result.value
					console.log('xxxxxx')
					console.log(productValue)
					console.log('xxxxxx')
				}
			)
			.assert.deepEqual(secondPrice, thirdPrice)

		// Delete Item
		browser
			.click('xpath', '//span[@id="sw-gtc"]/span/a')
			.useXpath()
			.assert.textContains('//div[@class="a-row"]//h1', 'Shopping Cart')
			.useXpath()
			.click(
				'//form[@id="activeCartViewForm"]//div[@data-name="Active Items"]//div[@class="sc-list-item-content"]//div//div[@class="a-column a-span10"]//div//div//div//div[@class="a-row sc-action-links"]//span[@data-action="delete"]//span//input'
			)
			// .pause()
			.useXpath()
			.assert.textContains(
				'//div[@class="a-row"]//h1',
				'Your Amazon Cart is empty.'
			)
	})
})
