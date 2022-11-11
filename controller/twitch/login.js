const qs = require("qs");
async function login(req, res) {
  const clientID = process.env.TWITCH_CLIENT_ID;
  const redirect_uri = process.env.TWITCH_CALLBACK;
  let scopes = ["user_read", "user:read:email", "chat:edit", "chat:read"];
  const response_type = "code";
  scopes = scopes.join(" ");

  let new_scopes = qs.stringify(scopes)

  res.redirect(
    `https://id.twitch.tv/oauth2/authorize?response_type=${response_type}&client_id=${clientID}&redirect_uri=${redirect_uri}&scope=${new_scopes}`
  );
}

module.exports = login;
