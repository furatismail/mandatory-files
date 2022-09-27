const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Posloucham na portu 3000");
});

app.get("/event", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");

  let count = 0;

  const timer = setInterval(() => {
    count++;
    const date = new Date().toLocaleString();
    // musi byt retezec ktery ma id, event, data \n
    res.write(`id: ${count}\nevent: message\ndata: ${date}\n\n`);
  }, 1000);
});

app.use(express.static("public"));
