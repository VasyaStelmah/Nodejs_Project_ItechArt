const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controllers/analytics");
router.get(
  "/getProduct/:month",
  passport.authenticate("jwt", { session: false }),
  controller.getProduct
);
router.get(
  "/getUser",
  passport.authenticate("jwt", { session: false }),
  controller.getUser
);
module.exports = router;
