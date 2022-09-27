const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Posloucham na portu 3000");
});

app.use(express.static("public"));
