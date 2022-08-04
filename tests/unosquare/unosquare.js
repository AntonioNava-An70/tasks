describe('The Login Page', () => {
	const unosquare = browser.page.mainpage()
	const contactUs = browser.page.contactus()
	const xpathSelectorsMainpage = require('../../selectors/unosquare/mainpage')

	beforeEach((browser) => {
		browser.maximizeWindow()
	})

	it('To check URL is the defined in page object file for mainpage', function () {
		unosquare
			.navigate()
			.waitForElementVisible('body')
			.assert.urlEquals(
				'https://www.unosquare.com/',
				'URL should be the defined in page Object file for mainpage'
			)
	})

	it('Contact Us button should be Clickable', () => {
		//Step 1: Open the Main page
		unosquare
			.navigate()
			.waitForElementVisible('@contactusMenu')
			.assert.not.cssProperty(
				'img[src="/assets/logos/unosquare_logo.svg"]',
				'display',
				'none'
			)
			// Step 2: Click on Contact Us button
			.assert.attributeContains('@contactusMenu', 'href', '/ContactUs2')
			.click('@contactusMenu')
		browser.end()
	})

	it('It is possible to fill the ContactUs form', () => {
		//Step 1: Being at Main page, Open Contact Us page
		unosquare
			.navigate()
			.waitForElementVisible('@contactusMenu')
			.click('@contactusMenu')
			.assert.urlEquals('https://www.unosquare.com/ContactUs')
		//Step 2: Go to the Form and fill it
		contactUs.assert
			.titleEquals(
				'Agile Collaborative Software Development | Contact Unosquare'
			)
			.assert.cssProperty(
				'@formTitle',
				'text-transform',
				'uppercase',
				'Check whether CSS transforms to uppercase '
			)
			.assert.textContains('@formTitle', 'CONTACT US')
			.sendKeys('@nameInputForm', 'John Doe')
			.assert.valueEquals('@nameInputForm', 'John Doe')
			.sendKeys('@emailInputForm', 'hola@test.com')
			.assert.valueEquals('@emailInputForm', 'hola@test.com')
			.setValue('@phoneInputForm', '111222')
			.assert.valueEquals('@phoneInputForm', '111222')

		browser.end()
	})

	it('First POM Test: Verify Social buttons has the right link for Facebook Twitter and LinkedIn', () => {
		// Step 1: Check if the SVGs for Social links are displayed
		unosquare.navigate().waitForElementVisible('@unicornImg')
		unosquare.assert.visible('@svgFacebook', 'SVG for Facebook is displayed')
		unosquare.assert.visible('@svgTwitter', 'SVG for Twitter is displayed')
		unosquare.assert.visible('@svgLinkedIn', 'SVG for LinkedIn is displayed')

		// Step 2: Click on Social link FaceBook
		unosquare
			.useXpath()
			.click(xpathSelectorsMainpage.gotItCookieButton)
			.waitForElementVisible(xpathSelectorsMainpage.socialLinkFacebook)
			.click(xpathSelectorsMainpage.socialLinkFacebook)

		//Step 3: Check the Facebook Title Page
		browser.windowHandles(function (result) {
			const newTab = result.value[1]

			browser.switchToWindow(newTab)
			browser.assert.titleEquals('Unosquare - Home | Facebook')
			browser.closeWindow()
		})

		//Automation Step: get the tab 0
		browser.windowHandles(function (result) {
			const newTab = result.value[0]

			browser.switchToWindow(newTab)
		})

		//Step 4: Click on Social Link Twitter
		unosquare.assert
			.urlEquals('https://www.unosquare.com/')
			.useXpath()
			.click(xpathSelectorsMainpage.socialLinkTwitter)

		//Step 5: Check the Twitter Title Page
		browser.windowHandles(function (result) {
			const newTab = result.value[1]

			browser.switchToWindow(newTab)
			browser.assert.titleEquals('Unosquare (@unosquare) / Twitter')
			browser.closeWindow()
		})

		//Automation Step: get the tab 0
		browser.windowHandles(function (result) {
			const newTab = result.value[0]

			browser.switchToWindow(newTab)
		})

		//Step 4: Click on Social Link LinkedIn
		unosquare.assert
			.urlEquals('https://www.unosquare.com/')
			.useXpath()
			.click(xpathSelectorsMainpage.socialLinkLinkedIn)

		//Step 5: Check the Twitter Title Page
		browser.windowHandles(function (result) {
			const newTab = result.value[1]

			browser.switchToWindow(newTab)
			browser.assert.urlContains('https://www.linkedin.com/')
			browser.closeWindow()
		})
		browser.end()
	})
})
