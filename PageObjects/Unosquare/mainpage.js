module.exports = {
	url: 'https://www.unosquare.com',
	elements: {
		contactusMenu: {
			selector: 'li a[href = "/ContactUs"]',
		},
		blogMenu: {
			selector: 'li a[href = "https://blog.unosquare.com"]',
		},
		industriesMenu: {
			selector: 'li a[href = "/Industries"]',
		},
		aboutMenu: {
			selector: 'li a[href = "/About"]',
		},
		servicesMenu: {
			selector: 'li a[href = "/Services"]',
		},
		unicornImg: {
			selector: 'img[class="unicorn"]',
		},
		svgFacebook: {
			selector: '#facebook',
		},
		svgTwitter: {
			selector: '#twitter',
		},
		svgLinkedIn: {
			selector: '#linkedin-white',
		},
		gotItCookieButton: {
			selector: '//div//a[@aria-label="dismiss cookie message"]',
			locateStrategy: 'xpath',
		},
		socialLinkFacebook: {
			selector: '//div[@class=" flex-container"]//a[1]',
			locateStrategy: 'xpath',
		},
		socialLinkTwitter: {
			selector: '//div[@class=" flex-container"]//a[2]',
			locateStrategy: 'xpath',
		},
		socialLinkLinkedIn: {
			selector: '//div[@class=" flex-container"]//a[3]',
			locateStrategy: 'xpath',
		},
	},
	commands: [
		{
			clickOnContactUs: function () {
				return this.assert
					.attributeContains('@contactusMenu', 'href', '/ContactUs')
					.click('@contactusMenu')
			},
			clickOnBlog: function () {
				return this.assert
					.attributeContains('@blogMenu', 'href', 'https://blog.unosquare.com')
					.click('@blogMenu')
			},

			checkSocialIconsDisplayed: function () {
				return this.assert
					.visible('@svgFacebook', 'SVG for Facebook is displayed')
					.assert.visible('@svgTwitter', 'SVG for Twitter is displayed')
					.assert.visible('@svgLinkedIn', 'SVG for LinkedIn is displayed')
			},
			clickOnFacebookLink: function () {
				return this.assert
					.urlEquals('https://www.unosquare.com/')
					.waitForElementVisible('@socialLinkFacebook')
					.click('@socialLinkFacebook')
			},
			clickOnTwitterLink: function () {
				return this.assert
					.urlEquals('https://www.unosquare.com/')
					.waitForElementVisible('@socialLinkTwitter')
					.click('@socialLinkTwitter')
			},
			clickOnLinkedInLink: function () {
				return this.assert
					.urlEquals('https://www.unosquare.com/')
					.waitForElementVisible('@socialLinkLinkedIn')
					.click('@socialLinkLinkedIn')
			},
			openedTabHandler: function (link) {
				return browser.windowHandles(function (result) {
					const newTab = result.value[1]

					browser.switchToWindow(newTab)
					browser.assert.urlContains(link)
					browser.closeWindow()
				})
			},
		},
	],
}
