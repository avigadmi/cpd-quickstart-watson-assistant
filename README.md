# Watson Assistant Basic starter kit [![](https://img.shields.io/badge/IBM_Cloud-powered-blue.svg)](https://bluemix.net)

This Node.js app demonstrates the [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/) service in a simple interface engaging in a series of simple simulated banking tasks.

## Getting started

### Configuring workspace

The following steps are to optionally retrieve a workspace id and configure it for your application. If you do not configure a workspace id, the first workspace in your space will be used, or a new workspace will be created.

1. From the [Resource list](https://cloud.ibm.com/resources) click on your Watson Assistance instance

1. From the **Manage** page, click **Launch tool**.

1. Click the dots in the upper right hand corner for the workspace you want and click **View details**

1. Copy the `Workspace ID` and add this as an environment variable labeled `WORKSPACE_ID` in your application

### Running locally

The following steps are for running locally with Node.js. You can also [run locally with Docker](#running-locally-with-docker).

1. To develop locally, first install [Node.js](https://nodejs.org) ([LTS](https://github.com/nodejs/Release) supported versions).

1. At the command line, go to your project directory.

1. Install the dependencies:

    ```sh
    npm install
    ```

1. Start the app:

    ```sh
    npm start
    ```

1. Point your browser to [localhost:3000](http://localhost:3000).

### Testing the app

After your app is installed and running, experiment with it to see how it responds.

The chat interface is on the left, and the JSON that the JavaScript code receives from the Watson Assistant service is on the right. Your questions and commands are interpreted using a small set of sample data trained with the banking intents:

* Visit the documentation to learn more about [intents](https://cloud.ibm.com/docs/services/assistant/intents.html#defining-intents) and [entities](https://cloud.ibm.com/docs/services/assistant/entities.html#defining-entities)



### Deploying to IBM Cloud as a CloudFoundry application

1. Login to IBM Cloud with the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html#overview):

    ```
    ibmcloud login
    ```

1. Target a Cloud Foundry organization and space:

    ```
    ibmcloud target --cf
    ```

1. Deploy the application:

    ```
    ibmcloud dev deploy
    ```
    The application will be deployed with the settings in your *manifest.yml* file.

1. Access your app at the URL specified in the command output.

    After your app is deployed, you can manage it from your [IBM Cloud resources list](https://cloud.ibm.com/resources).


## Managing your App in the Watson Console

Select your project from the [Apps list](https://cloud.ibm.com/developer/watson/apps) in the Watson developer console. From the project page, you can do the following:

    - Add additional services to your project
    - View documentation and credentials for your project's services
    - Configure a DevOps toolchain

## Running locally with Docker

1. Install the [IBM Cloud CLI tools](https://cloud.ibm.com/docs/cli/index.html#overview).

1. If you installed any node dependencies into your project folder, remove them. Open a terminal and run the following command from your project folder, where your starter kit code is:

    ```sh
    rm -rf node_modules
    ```

1. Build the Docker container:

    ```sh
    ibmcloud dev build
    ```

    The build may take a few minutes to complete.

1. Run the Docker container:

    ```sh
    ibmcloud dev run
    ```

1. Point your browser to [localhost:3000](http://localhost:3000).

## License

  This sample code is licensed under Apache 2.0.

## Open Source @ IBM

  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)
