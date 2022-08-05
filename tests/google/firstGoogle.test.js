describe('Demo Test for grouping', () => {
	it('Title should be Google', () => {
		browser
			.url('https://www.google.com')
			.maximizeWindow()
			.assert.titleEquals('Google')
	})

	it('Should be Open Google home page', () => {
		browser
			.url('https://www.google.com')
			.maximizeWindow()
			.assert.urlEquals('https://www.google.com/')
	})

	it('Verify that image Google is displayed', () => {
		browser
			.url('https://www.google.com')
			.maximizeWindow()
			.verify.visible('img[alt="Google"]')
	})
})
