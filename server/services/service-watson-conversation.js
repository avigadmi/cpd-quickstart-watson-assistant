const AssistantV1 = require('watson-developer-cloud/assistant/v1');

module.exports = function(app, serviceManager) {
	const iam_url = "https://iam.bluemix.net/identity/token";
	const assistant = new AssistantV1({
		iam_url,
		iam_apikey: process.env.ASSISTANT_IAM_APIKEY,
		username: process.env.ASSISTANT_USERNAME,
		password: process.env.ASSISTANT_PASSWORD,
		url: process.env.ASSISTANT_URL,
		version: '2018-09-20',
	});

	serviceManager.set('watson-conversation', assistant);
};
