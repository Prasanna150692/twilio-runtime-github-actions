exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello World! Welcome to Twilio Functions"
    }

    callback(null, result);
  };
