var example = {
  webhook: {
    handler: function (request) {
      var payload = request.payload;

      // do something here with to parse your payload, set a subject, and set a msg, and then send that onward through SendGrid.
      //

      var subject = "first demo";
      var msg = "this is the msg of the first demo."; 

      SendGrid.send({
        to: PINGHOOK_TO, 
        from: PINGHOOK_FROM,
        subject: subject,
        text: msg 
      }, function(success, message) {
        if (!success) { console.log(message); } 
      });

      request.reply({ success: true });
    }
  }
};

server.route({
  method  : 'POST',
  path    : '/example',
  config  : example.webhook
});
