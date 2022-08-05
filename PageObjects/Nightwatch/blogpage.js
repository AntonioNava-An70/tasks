module.exports = {
	url: 'https://nightwatchjs.org/blog/',
	elements: {
		footerAboutText: {
			selector: '//div[@class="footer-text"]//p[@class="address"]',
			locateStrategy: 'xpath',
		},
	},
}
