# Watson Assistant Quickstart

IBM Watson Assistant for IBM Cloud Pak for Data combines machine learning, natural language understanding, and an integrated dialog editor to create conversation flows between your apps and your users.  

This Node.js app demonstrates the Watson Assistant service in a simple interface engaging in a series of simple simulated banking tasks.

This quickstart will get you up and running on any OpenShift cluster including a local [minishift](https://www.okd.io/minishift) running on your machine.

![Demo](readme_images/demo.gif)

You can view a [demo](http://conversation-simple.ng.bluemix.net/) of this app.

## Getting started

### Installing the Watson Assistant add-on on IBM Cloud Pak for Data 

Make your data ready for an AI and multicloud world. Cloud Pak for Data System is an all-in-one cloud-native Data and AI platform in a box, providing a pre-configured, governed, and secure environment to collect, organize and analyze data. [Learn more](https://docs-icpdata.mybluemix.net/docs/content/SSQNUZ_current/com.ibm.icpdata.doc/zen/overview/overview.html).

Installing Cloud Pak for Data - [instructions](https://docs-icpdata.mybluemix.net/docs/content/SSQNUZ_current/com.ibm.icpdata.doc/zen/install/ovu.html)

Installing the Watson Assistant add-on - [instructions](https://docs-icpdata.mybluemix.net/docs/content/SSQNUZ_current/com.ibm.icpdata.doc/watson/assistant-install.html)

### Create your own copy of this repo
Fork a copy of this repo.

### Creating a project

After logging in with `oc login`, ensure that you have a project set up. If not, create one as follows:

        $ oc new-project watson-assistant-project --display-name="Watson Assistant Project"

That's it, project has been created. Ensure that your current project is set:

        $ oc project watson-assistant-project

### Creating the app from a template

The template for this example is located at [watson-assistant-quickstart.json](openshift/templates/watson-assistant-quickstart.json).

First, list the available parameters:

        $ oc process --parameters -f https://raw.githubusercontent.com/avigadmi/watson-assistant-example/master/openshift/templates/watson-assistant-quickstart.json

The following parameters are required, You can find them by clicking on your Watson Assistant instance in the Cloud Pak for Data console:
1. `ACCESS_TOKEN`
2. `ASSISTANT_URL`

Note the `WORKSPACE_ID` optional parameter - you can start this app with an existing workspace, if left blank, a workspace with the name `Bank_Simple` will be used or created. [How to find existing workspace ID](#how-to-find-existing-workspace-id)

Create the app from the template and specify the `SOURCE_REPOSITORY_URL` to be the url of your forked repo:

        $ oc new-app -f \
        https://raw.githubusercontent.com/avigadmi/watson-assistant-example/master/openshift/templates/watson-assistant-quickstart.json \
        -p ACCESS_TOKEN=<your access token> \
        -p ASSISTANT_URL=<your assistant url> \
        -p SOURCE_REPOSITORY_URL=<your repository location>

`oc new-app` will kick off a build once all required dependencies are confirmed.


#### Check the status


Check the status of your new nodejs app with the command:

        $ oc status
        
        
Which should return something like:

        In project Watson Assistant Project (watson-assistant-project) on server https://10.2.2.2:8443

         svc/watson-assistant-quickstart - 172.30.108.183:8080
          dc/watson-assistant-quickstart deploys istag/watson-assistant-quickstart:latest <-
            bc/watson-assistant-quickstart source builds https://github.ibm.com/icp4d-devex-prototype/cpd-quickstart-watson-assistant on openshift/nodejs:10
              build #1 running for 7 seconds
            deployment #1 waiting on image or update        
        

#### Custom Routing

An OpenShift route exposes a service at a host name, like www.example.com, so that external clients can reach it by name.

DNS resolution for a host name is handled separately from routing; you may wish to configure a cloud domain that will always correctly resolve to the OpenShift router, or if using an unrelated host name you may need to modify its DNS records independently to resolve to the router.

That aside, let's explore our new web app. `oc new-app` created a new route. To view your new route:

        $ oc get route

In the result you can find all routes in your project and for each route you can find its hostname.  
Find the `watson-assistant-quickstart` route and use the hostname to navigate to the newly created Node.js web app.
Notice that you can use the `APPLICATION_DOMAIN` template parameter to define a hostname for your app.

To create a new route at a host name, like www.example.com:

        $ oc expose svc/watson-assistant-quickstart --hostname=www.example.com


#### Optional diagnostics
        
If the build is not yet started (you can check by running `oc get builds`), start one and stream the logs with:

        $ oc start-build watson-assistant-quickstart --follow

Deployment happens automatically once the new application image is available.  To monitor its status either watch the web console or execute `oc get pods` to see when the pod is up.  Another helpful command is

        $ oc get svc
        
        
This will help indicate what IP address the service is running, the default port for it to deploy at is 8080. Output should look like:

        NAME                          CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
        watson-assistant-quickstart   172.30.249.251   <none>        8080/TCP   7m                


### Adding Webhooks and Making Code Changes
Assuming you used the URL of your own forked repository, you can configure your github repository to make a webhook call whenever you push your code. Learn more about [Webhook Triggers](https://docs.openshift.com/container-platform/3.5/dev_guide/builds/triggering_builds.html#webhook-triggers).

1. From the OpenShift web console homepage, navigate to your project
2. Go to Builds
3. Click the link with your BuildConfig name
4. Click the Configuration tab
5. Click the "Copy to clipboard" icon to the right of the "GitHub webhook URL" field
6. Navigate to your repository on GitHub and click on repository settings > webhooks > Add webhook
7. Paste your webhook URL provided by OpenShift
8. Leave the defaults for the remaining fields - That's it!
9. After you save your webhook, refresh your Github settings page and check the status to verify connectivity.  


### Testing the app

After your app is installed and running, experiment with it to see how it responds.

The chat interface is on the left, and the JSON that the JavaScript code receives from the Watson Assistant service is on the right. Your questions and commands are interpreted using a small set of sample data trained with the banking intents.

* Visit the documentation to learn more about [intents](https://cloud.ibm.com/docs/services/assistant/intents.html#defining-intents) and [entities](https://cloud.ibm.com/docs/services/assistant/entities.html#defining-entities)


### Learn more about [OpenShift templates](https://docs.openshift.com/enterprise/3.0/dev_guide/templates.html#dev-guide-templates).


### How to find existing workspace ID

1. Click on your Watson Assistant instance.

1. Click on **Launch tool** and go to the **Skills** tab.

1. Click the dots in the upper right hand corner for the Skill you want and click **View API Details**.

1. Copy the `Workspace ID` and paste this as a quickstart `WORKSPACE_ID` parameter value.


### Running locally

Follow the steps below to run the app locally:

1. First install [Node.js](https://nodejs.org) ([LTS](https://github.com/nodejs/Release) supported versions).

2. In the application folder, copy the *.env.example* file and create a file called *.env*
       
    ```sh
    cp .env.example .env
    ```       

7. Open the *.env* file and add `ACCESS_TOKEN`, `ASSISTANT_URL` and optionally `WORKSPACE_ID`.
    
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


## License

  This sample code is licensed under Apache 2.0.
