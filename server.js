var fcm = require("fcm-notification");
var FCM = new fcm("./kolachimart-firebase.json");
var token = "token here";

var message = {
  data: {
    //This is only optional, you can send any data
    score: "850",
    time: "2:45"
  },
  notification: {
    title: "Title of notification",
    body: "Body of notification"
  },
  token: token
};

FCM.send(message, function(err, response) {
  if (err) {
    console.log("error found", err);
  } else {
    console.log("response here", response);
  }
});
