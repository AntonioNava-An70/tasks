describe('The Login Page', () => {
	const unosquare = browser.page.mainpage()
	const contactUs = browser.page.contactus()

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
			.clickOnContactUs()
			.assert.urlEquals('https://www.unosquare.com/ContactUs')
		browser.end()
	})

	it('It is possible to fill the ContactUs form and Validate warning messages', () => {
		//Step 1: Being at Main page, Open Contact Us page
		unosquare
			.navigate()
			.clickOnContactUs()
			.assert.urlEquals('https://www.unosquare.com/ContactUs')
		//Step 2: Go to the Form and fill it
		contactUs
			.verifyTitleAndFormInContactUsPage()
			.contactUnosquare()
			.assert.valueEquals('@companyTextField', 'QA CoE course - Json')
			.assert.valueEquals('@phoneInputForm', '3300000000')
			.assert.valueEquals(
				'@messageTextArea',
				'This is a Random Text used in a Course'
			)
		browser.end()
	})

	it('First POM Test: Verify Social buttons has the right link for Facebook Twitter and LinkedIn', () => {
		// Step 1: Check if the SVGs for Social links are displayed
		unosquare
			.navigate()
			.waitForElementVisible('@unicornImg')
			.checkSocialIconsDisplayed()

		// Step 2: Click on Social link FaceBook
		unosquare.click('@gotItCookieButton').clickOnFacebookLink()

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
		unosquare.clickOnTwitterLink()

		//Step 5: Check the Twitter Title Page
		browser.windowHandles(function (result) {
			const newTab = result.value[1]

			browser.switchToWindow(newTab)
			browser
				.waitForElementVisible('div[data-testid="BottomBar"]')
				.assert.titleEquals('Unosquare (@unosquare) / Twitter')
			browser.closeWindow()
		})

		//Automation Step: get the tab 0
		browser.windowHandles(function (result) {
			const newTab = result.value[0]

			browser.switchToWindow(newTab)
		})

		//Step 4: Click on Social Link LinkedIn
		unosquare
			.clickOnLinkedInLink()
			//Step 5: Check the Twitter Title Page
			.openedTabHandler('https://www.linkedin.com/')
		browser.end()
	})
})
