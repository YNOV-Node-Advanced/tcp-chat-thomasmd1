var net = require("net");

var client = new net.Socket();
client.connect(1337, "127.0.0.1", function() {
  client.write("Thomas MOIROUD");
});

client.on("data", function(data) {
  console.log("Serveur : " + data);
  //   client.destroy();
});

client.on("close", function() {
  console.log("Connection closed");
});