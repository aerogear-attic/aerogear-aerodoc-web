# aerogear-aerodoc-web

This Web Application is a showcase / quickstart part of Aerogear's UnifiedPush facilities.
It acts as a client for the AeroDoc backend application : https://github.com/aerogear/aerogear-aerodoc-backend

## Prerequisites

* Be sure to have a running instance of the UnifiedPush Server. Instructions can be found [here](https://github.com/aerogear/aerogear-unifiedpush-server).
* Be sure to have a running instance of the SimplePush Server. Instructions can be found [here](https://github.com/aerogear/aerogear-simplepush-server)
* Be sure to have a running instance of Aerodoc. Instructions can be found [here](https://github.com/aerogear/aerogear-aerodoc-backend)

## Configuration

In app.js you can set  :

* variantID
* variantSecret
* Base URL of AeroDoc backend
* SimplePush Server URL
* UnifiedPush Server URL


## Deployment

For now, to get it working, you have to deploy the client under the aerodoc sub context, for instance ```/client``` . Please deploy your AeroDoc Back End as a exploded war and copy all the files of this project under ```src/main/webapp/client```, replacing the existing files found there.