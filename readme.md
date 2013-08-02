# aerogear-push-quickstart-web

This Web Application is a showcase / quickstart part of Aerogear's Unified Push facilities.
It acts as a client for the aerodoc backend application : https://github.com/aerogear/aerogear-push-quickstart-backend

## Prerequisites

* Be sure to have a running instance of a Push Server. Instructions can be found [here](https://github.com/aerogear/aerogear-unified-push-server).
* Be sure to have a running instance of a Simple Push Server. Instructions can be found [here](https://github.com/aerogear/aerogear-simple-push-server)
* Be sure to have a running instance of Aerodoc. Instructions can be found [here](https://github.com/aerogear/aerogear-push-quickstart-backend)

## Configuration

You must have a valid ```variantID``` and a ```variantSecret```, these can be set on the ```notifierService.js``` file :

```
UPClient = AeroGear.UnifiedPushClient("{variantID}", "{variantSecret}", "http://localhost:8080/ag-push/rest/registry/device");
```

## Deployment

Be sure to deploy your app on a Web Server, you are free to use whatever you want. For instance, if you have Python on your machine simply run :

```
python -m SimpleHTTPServer
```

