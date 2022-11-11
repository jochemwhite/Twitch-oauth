const qs = require("qs");
async function login(req, res) {
  const clientID = process.env.TWITCH_CLIENT_ID;
  const redirect_uri = process.env.TWITCH_CALLBACK;
  let scopes = ["user_read", "user:read:email", "chat:edit", "chat:read"];
  const response_type = "code";
  scopes = scopes.join(" ");

  res.redirect(
    "https://id.twitch.tv/oauth2/authorize?" +
      qs.stringify({
        response_type: response_type,
        client_id: clientID,
        scope: scopes,
        redirect_uri: redirect_uri,
      })
  );
}


module.exports = login