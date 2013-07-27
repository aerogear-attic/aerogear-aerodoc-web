(function() {
    var leadEndpoint, leadRequest, broadcastRequest, broadcastEndpoint,
    UPClient = AeroGear.UnifiedPushClient( AeroGear.SimplePush.variantID, "0dcdc9ec-495c-4c2d-a675-b61facbb7247", "http://localhost:8080/ag-push/rest/registry/device" );

  console.log("Web Socket opened!");

    broadcastRequest = navigator.push.register();
    broadcastRequest.onsuccess = function( event ) {
        broadcastEndpoint = event.target.result;
        UPClient.registerWithPushServer.registerWithPushServer( "broadcast", broadcastEndpoint );
        console.log("Subscribed to Broadcast messages on " + broadcastEndpoint.channelID);
        console.log(localStorage.getItem( broadcastEndpoint.channelID ) || 1 );
       
    };

  leadRequest = navigator.push.register();
  leadRequest.onsuccess = function( event ) {
        leadEndpoint = event.target.result;
    UPClient.registerWithPushServer( "lead", mailEndpoint , "maria" );
       // $("#mailVersion").attr("name", mailEndpoint.channelID);
        console.log("Subscribed to lead messages on " + mailEndpoint.channelID);
        console.log(localStorage.getItem( mailEndpoint.channelID ) || 1 );
        //$("#mail").prop("disabled", false);
    };
       
})();

