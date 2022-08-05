module.exports = {
	url: 'https://www.unosquare.com/ContactUs',
	elements: {
		formTitle: {
			selector: 'div[id="form"] h2',
		},
		nameInputForm: {
			selector: 'div[class="input"] input[name="name"]',
		},
		emailInputForm: {
			selector: 'div[class="input"] input[name="email"]',
		},
		phoneInputForm: {
			selector: 'div[class="input"] input[name="phone"]',
		},
		companyTextField: {
			selector: 'div[class="input"] input[name="company"]',
		},
		messageTextArea: {
			selector: 'div[class="input"] textarea[name="message"]',
		},
		submitBtn: {
			selector: "input[value = 'Submit']",
		},
		nameWarningMsg: {
			selector:
				"//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
			locateStrategy: 'xpath',
		},
	},
	commands: [
		{
			contactUnosquare: function () {
				this.api.pause(1000)
				return this.waitForElementVisible('@formTitle', 1000)

					.assert.textContains('@formTitle', 'CONTACT US')
					.setValue('@companyTextField', 'QA CoE course')
					.setValue('@phoneInputForm', '3300000000')
					.setValue(
						'@messageTextArea',
						'This is a Random Text used in a Course'
					)

					.click('@submitBtn')
					.waitForElementVisible('@nameWarningMsg')
			},
			verifyTitleAndFormInContactUsPage: function () {
				return this.assert
					.titleEquals(
						'Agile Collaborative Software Development | Contact Unosquare'
					)
					.assert.cssProperty(
						'@formTitle',
						'text-transform',
						'uppercase',
						'Check whether CSS transforms to uppercase '
					)
			},
		},
	],
}
