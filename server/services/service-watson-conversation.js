const AssistantV1 = require('ibm-watson/assistant/v1');

module.exports = function(app, serviceManager) {
	const assistant = new AssistantV1({
        url: process.env.ASSISTANT_URL,
        icp4d_access_token: process.env.ACCESS_TOKEN,
        version: '2019-02-28',
        disable_ssl_verification: true
	});

	serviceManager.set('watson-conversation', assistant);
};
