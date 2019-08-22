const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
    url: process.env.ASSISTANT_URL,
    icp4d_access_token: process.env.ASSISTANT_APIKEY,
    version: '2019-02-28',
    disable_ssl_verification: true // necessary for CPD
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
        }
        const bankWorkspace = (response.workspaces || []).find((workspace) => workspace.name === "Bank_Simple");
		if (bankWorkspace) {
			workspaceId = bankWorkspace.workspace_id;
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
