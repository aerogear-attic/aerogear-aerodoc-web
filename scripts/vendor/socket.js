(function () {
  var leadEndpoint, leadRequest, broadcastRequest, broadcastEndpoint, SPClient,
      UPClient = AeroGear.UnifiedPushClient("ba3cfa4b-7f47-44a1-bdae-0dc36041bdb2", "1161fa49-2c5b-4101-8102-ea747606d333", "http://localhost:8080/ag-push/rest/registry/device");

  console.log("Web Socket opened!");

  function spConnect() {
    broadcastRequest = navigator.push.register();
    broadcastRequest.onsuccess = function (event) {
      broadcastEndpoint = event.target.result;
      var broadCastMetadata = {
        deviceToken: broadcastEndpoint.channelID,
        category: "broadcast"
      }
      UPClient.registerWithPushServer(broadCastMetadata);
      console.log("Subscribed to Broadcast messages on " + broadcastEndpoint.channelID);
      console.log(localStorage.getItem(broadcastEndpoint.channelID) || 1);

    };

    leadRequest = navigator.push.register();
    leadRequest.onsuccess = function (event) {
      leadEndpoint = event.target.result;
      var leadMetadata = {
        deviceToken: broadcastEndpoint.channelID,
        alias: "maria"
      }
      UPClient.registerWithPushServer(leadMetadata);

      console.log("Subscribed to lead messages on " + leadEndpoint.channelID);
      console.log(localStorage.getItem(leadEndpoint.channelID) || 1);

    };

  }

  SPClient = AeroGear.SimplePushClient("http://localhost:7777/simplepush", spConnect)

})();

