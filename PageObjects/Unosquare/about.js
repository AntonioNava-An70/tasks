module.exports = {
	url: 'https://blog.unosquare.com/',
	elements: {
		names: {
			selector:
				'//div[@class="leads"]//span[@class="name"][text()="Mario Di Vece"]',
			locateStrategy: 'xpath',
		},
	},
	commands: [
		{
			checkNamesInAbout: function () {
				const data = getData()
				data.names.forEach((name) => {
					console.log(name)
					let cardName = `//div[@class="leads"]//span[@class="name"][text()="${name}"]`
					return this.useXpath().assert.elementPresent(cardName)
				})
			},
		},
	],
}
function getData() {
	return require('../../dataExternal/namesInAbout.json') // Using the correct path is important
}
