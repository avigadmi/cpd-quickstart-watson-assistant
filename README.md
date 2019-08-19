# Watson Assistant Example Quickstart

IBM Watson Assistant for IBM Cloud Pak for Data combines machine learning, natural language understanding, and an integrated dialog editor to create conversation flows between your apps and your users.  

This Node.js app demonstrates the Watson Assistant service in a simple interface engaging in a series of simple simulated banking tasks.

![Demo](readme_images/demo.gif)

You can view a [demo](http://conversation-simple.ng.bluemix.net/) of this app.

## Getting started

### IBM Cloud Pak for Data 

Make your data ready for an AI and multicloud world. Cloud Pak for Data System is an all-in-one cloud-native Data and AI platform in a box, providing a pre-configured, governed, and secure environment to collect, organize and analyze data. [Learn more](https://docs-icpdata.mybluemix.net/docs/content/SSQNUZ_current/com.ibm.icpdata.doc/zen/overview/overview.html).

Installing Cloud Pak for Data - [Installation Instructions](https://docs-icpdata.mybluemix.net/docs/content/SSQNUZ_current/com.ibm.icpdata.doc/zen/install/ovu.html)

Installing the Watson Assistant add-on [instructions](https://docs-icpdata.mybluemix.net/docs/content/SSQNUZ_current/com.ibm.icpdata.doc/watson/assistant-install.html)


### Configuring workspace

The following steps are to optionally retrieve a workspace id and configure it for your application. If you do not configure a workspace id, the first workspace will be used, or a new workspace will be created.

1. Click on your Watson Assistance instance.

1. From the **Manage** page, click **Launch tool**.

1. Click the dots in the upper right hand corner for the workspace you want and click **View details**.

1. Copy the `Workspace ID` and paste this as a quickstart parameter labeled `WORKSPACE_ID`.


### Running locally

The following steps are for running locally with Node.js.

1. To develop locally, first install [Node.js](https://nodejs.org) ([LTS](https://github.com/nodejs/Release) supported versions).

2. In the application folder, copy the *.env.example* file and create a file called *.env*
       
    ```sh
    cp .env.example .env
    ```       

7. Open the *.env* file and add `ASSISTANT_IAM_APIKEY`, `ASSISTANT_URL` and the optionally `WORKSPACE_ID`.
    
3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the app:

    ```sh
    npm start
    ```

5. Point your browser to [localhost:3000](http://localhost:3000).


### Known issues

Please note this app uses the Watson Assistant for IBM Cloud Pak for Data v1 API. If you need more information, you can go to the [Watson Assistant V1 API page](https://cloud.ibm.com/apidocs/assistant-data-v1).  
The [Watson Assistant for IBM Cloud Pak for Data v2 API](https://cloud.ibm.com/apidocs/assistant-data-v2) doesn't yet support creation of assistants.

### Testing the app

After your app is installed and running, experiment with it to see how it responds.

The chat interface is on the left, and the JSON that the JavaScript code receives from the Watson Assistant service is on the right. Your questions and commands are interpreted using a small set of sample data trained with the banking intents:

* Visit the documentation to learn more about [intents](https://cloud.ibm.com/docs/services/assistant/intents.html#defining-intents) and [entities](https://cloud.ibm.com/docs/services/assistant/entities.html#defining-entities)

## License

  This sample code is licensed under Apache 2.0.
