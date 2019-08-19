const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
    iam_apikey: process.env.ASSISTANT_IAM_APIKEY,
    username: process.env.ASSISTANT_USERNAME,
    password: process.env.ASSISTANT_PASSWORD,
    url: process.env.ASSISTANT_URL,
    version: '2019-02-28',
});

let workspaceId = process.env.WORKSPACE_ID;
const MAX_RETRIES = 3;

/**
 * Create an assistant workspace based on training file provided
 * @param {Object} assistant Instance provided for Assistant to use
 * @param {Integer} retryCount Number of retries in case of failure
 * @param {Object} trainingFile Config file used to create workspace
 */
const createWorkspace = (assistant, retryCount, trainingFile) => {
    assistant.createWorkspace(trainingFile, function (err, response) {
        if (err) {
            if (retryCount > 1) {
                --retryCount;
                createWorkspace(assistant, retryCount, trainingFile);
            } else {
                console.log('Can not create workspace! Please go to Launch Tool provided in starter kits app page to create workspace manually');
            }
        } else {
            workspaceId = response.workspace_id;
            console.log(`Workspace has been created (${workspaceId})`);
        }
    });
};

if (workspaceId) {
	console.log('Application configured with workspace id:', workspaceId);
} else {
	// Creates a workspace or use an existing one
	assistant.listWorkspaces(function (err, response) {
		if (err) {
			console.log(err);
			return;
		} else if (response.workspaces.length > 0) {
			workspaceId = response.workspaces[0].workspace_id;
			console.log('Using existing workspace:', workspaceId);
		} else {
			console.log('Creating a workspace...');
			createWorkspace(assistant, MAX_RETRIES, require('../training/bank_simple_workspace.json'));
		}
	});
}

module.exports = {
    getAssistantV1: () => assistant,
    getWorkspaceId: () => workspaceId,
};
