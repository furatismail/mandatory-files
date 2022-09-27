const express = require("express");
const socket = require("socket.io");
const PORT = 3000;
const app = express();
const server = app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// SERVING STATIC FILES
app.use(express.static("public"));

// WEBSOCKET
const io = socket(server);

io.on("connection", (socket) => {
  console.log(`Client connected ${socket.id}`);

  socket.on("chat", (data) => {
    console.log(data);
    io.emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  })

  socket.on("disconnect", () => console.log("Client disconnected"));
});
