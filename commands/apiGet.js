const axios = require('axios')
function apiGet() {}

apiGet.prototype.command = async function (apiUrl, success) {
	try {
		const response = await axios.get(apiUrl)
		success(response)
		return response
	} catch (error) {
		console.error(error)
	}
}

module.exports = apiGet
