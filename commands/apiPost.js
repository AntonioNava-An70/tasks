const axios = require('axios')
function apiPost() {}

apiPost.prototype.command = async function (
	apiUrl,
	postBody,
	postHeaders,
	postAuth,
	success
) {
	try {
		const response = await axios.post(apiUrl, postBody, postHeaders, postAuth)
		success(response)
		return response
	} catch (error) {
		console.log(error)
	}
}

module.exports = apiPost
