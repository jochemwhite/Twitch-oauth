const { Router } = require("express")
const router = Router();
const login = require('../controller/twitch/login')
const callback = require('../controller/twitch/callback')

router.get("/login", login)
router.get("/callback", callback);

module.exports = router






