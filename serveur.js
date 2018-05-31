var net = require("net");

let users = 0;

var server = net.createServer(function(socket) {
  users += 1;
  socket.write("Vous êtes " + users + " en ligne");
  socket.pipe(socket);

  socket.on("close", err => {
    users -= 1;
    console.log("deconnexion - en ligne : " + users);
  });

  socket.on("error", err => {
    users -= 1;
    console.log("deconnexion - en ligne : " + users);
  });

  socket.on("data", function(data) {
    let message = data.toString() + " " + "est connecté - en ligne : " + users;
    console.log(message);
  });
});

server.listen(1337, "127.0.0.1");
