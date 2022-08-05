describe('Demo Test for grouping Unosquare test', () => {
	const contactUs = browser.page.contactus()

	it('Should be Open Unosquare home page', () => {
		contactUs
			.maximizeWindow()
			.navigate()
			.assert.urlEquals('https://www.unosquare.com/ContactUs')
			.contactUnosquare()
		browser.end()
	})
})
