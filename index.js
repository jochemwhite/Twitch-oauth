const express = require("express");
const bodyParser = require("body-parser");
const twitch = require("./routes/twitch");

const app = express();

app.use(bodyParser.json());

app.use("/twitch", twitch);

app.listen(8888, () => {
  console.log("Listening on port 8888");
  console.log('http://localhost:8888/twitch/login')
});
