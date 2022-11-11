const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const qs = require("qs")

const client_id = process.env.TWITCH_CLIENT_ID;
const client_secret = process.env.TWITCH_CLIENT_SECRET;
const redirect_uri = process.env.TWITCH_CALLBACK;

async function callback(req, res) {
  const code = req.query.code;

  let response = await FetchToken(code);

  console.log(response);


  res.send(200)
}

module.exports = callback;



async function FetchToken(code) {
  const response = await axios.post(
    "https://id.twitch.tv/oauth2/token?" +
    qs.stringify({
      client_id: client_id,
      client_secret: client_secret,
      code:code,
      grant_type: 'authorization_code',      
      redirect_uri: redirect_uri,
    }),
    null,
    {
      headers: {},
    }
  );
  return response;
}
