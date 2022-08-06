module.exports = {
	url: 'https://blog.unosquare.com/',
	elements: {
		headerBlog: {
			selector: '//div[@class="breadcrumb-container"]//h1',
			locateStrategy: 'xpath',
		},
		aboutLink: {
			selector: 'li a[href="https://www.unosquare.com/About"]',
		},
	},
	commands: [
		{
			clickOnContactUs: function () {
				return this.assert
					.attributeContains('@headerBlog', 'href', '/ContactUs')
					.click('@headerBlog')
			},
			performSearchBlog: function () {
				const searchTerms = getData()
				searchTerms.terms.forEach((ele) => {
					this.assert
						.visible('#search-bar')
						.setValue('#search-bar', ele)
						.assert.valueEquals('#search-bar', ele)
						.click('button[class="search-submit link-blue"]')
						.assert.urlContains(ele)
					return browser.back()
				})
			},
		},
	],
}
function getData() {
	return require('../../dataExternal/searchTerms.json') // Using the correct path is important
}
