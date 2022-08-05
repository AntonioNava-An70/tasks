describe('First API Test demo', () => {
	//*******  GET  ***********/

	it('Firsts assertions', () => {
		const apiUrl =
			'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
		browser.apiGet(apiUrl, function (response) {
			// console.log(response)
			browser.assert.equal(response.status, '200')
			browser.assert.equal(response.data.copyright, 'Vikas Chander')
			browser.assert.equal(response.data.media_type, 'image')
			browser.assert.equal(response.data.service_version, 'v1')
		})
	})

	it('API Testing - GET Negative', () => {
		const apiUrl =
			'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
		browser.apiGet(apiUrl, function (response) {
			browser.assert.equal(response.status, '200')
			browser.assert.equal(response.data.copyright, 'My Name')
		})
	})

	it('API Testing - GET Task 1', () => {
		const apiUrl =
			'https://api.nasa.gov/techtransfer/patent/?engine&api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'

		browser.apiGet(apiUrl, function (response) {
			// console.log(response)
			browser.assert.equal(response.status, '200')
			browser.assert.equal(response.data.total, 49)
		})
	})

	it('API Testing - GET Task 2', () => {
		const apiUrl =
			'https://api.nasa.gov/techport/api/projects/17792?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'

		browser.apiGet(apiUrl, function (response) {
			browser.assert.equal(response.status, '200')
			browser.assert.equal(
				response.data.project.title,
				'Development of Advanced Anti-Reflection Coatings for High Performance Solar Energy Applications, Phase II'
			)
			browser.assert.equal(
				response.data.project.releaseStatusString,
				'Released'
			)
		})
	})

	// *******  POST  ***********/
	it('API Testing - POST', () => {
		var apiUrl = 'https://reqres.in/api/users'
		var postData = { name: 'QA CoE Name', job: 'Unosquare QA' }

		browser.apiPost(apiUrl, postData, null, null, function (response) {
			// console.log(response)
			browser.assert.equal(response.status, '201')
			browser.assert.equal(response.data.name, 'QA CoE Name')
			browser.assert.equal(response.data.job, 'Unosquare QA')
		})
	})

	it('API Testing - POST Task 1', () => {
		var apiUrl = 'https://reqres.in/api/register'
		var postData = {
			email: 'eve.holt@reqres.in',
			password: 'pistol',
		}

		browser.apiPost(apiUrl, postData, null, null, function (response) {
			// console.log(response.headers)
			browser.assert.equal(response.status, '200')
			browser.assert.equal(response.data.id, '4')
			browser.assert.equal(response.headers.server, 'cloudflare')
		})
	})
})
