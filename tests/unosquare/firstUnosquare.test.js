describe('Demo Test for grouping Unosquare test', () => {
	it('Should be Open Unosquare home page', () => {
		browser
			.url('https://www.unosquare.com')
			.maximizeWindow()
			.assert.urlEquals('https://www.unosquare.com/')
	})
})
