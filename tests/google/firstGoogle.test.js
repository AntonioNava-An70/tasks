describe('Demo Test for grouping', () => {
	it('Should be Open Google home page', () => {
		browser
			.url('https://www.google.com')
			.maximizeWindow()
			.assert.urlEquals('https://www.google.com/')
	})
})
