const express = require("express");
const app = express();
const port = 3000;
const socket = require("socket.io");
const server = app.listen(port, () => {
  console.log("I am running");
});

app.get("/api/test", (req, res) => {
  res.send("Hello world!");
});

app.get("/event", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  let count = 0;

  const timer = setInterval(() => {
    count++;
    res.write(`id: ${count}\nevent: message\ndata:hello world\n\n`);
  }, 1000);
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", (socket) => {
  console.log(`Client connected ${socket.id}`);

  socket.on("chat", (data) => {
    console.log(data);
    io.emit("chat", data);
  });

  socket.on("typing", (data) => {
    console.log(data);
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => console.log("Client is disconnected"));
});
