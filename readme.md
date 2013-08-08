# aerogear-push-quickstart-web

This Web Application is a showcase / quickstart part of Aerogear's Unified Push facilities.
It acts as a client for the aerodoc backend application : https://github.com/aerogear/aerogear-push-quickstart-backend

## Prerequisites

* Be sure to have a running instance of a Push Server. Instructions can be found [here](https://github.com/aerogear/aerogear-unified-push-server).
* Be sure to have a running instance of a Simple Push Server. Instructions can be found [here](https://github.com/aerogear/aerogear-simple-push-server)
* Be sure to have a running instance of Aerodoc. Instructions can be found [here](https://github.com/aerogear/aerogear-push-quickstart-backend)

## Configuration

In app.js you can set  :

* variantID
* variantSecret
* Base URL of AeroDoc backend
* SimplePush Server URL
* Unified Push Server URL


## Deployment

For now, to get it working, you have to deploy the client under the aerodoc sub context, for instance ```/client``` . Please deploy your AeroDoc Back End as a exploded war and copy this project under ```/client``` under ```src/main/webapp```
