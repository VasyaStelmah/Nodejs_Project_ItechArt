const express = require("express");
const admin = require("../middleware/admin");
const passport = require("passport");
const controller = require("../controllers/user");
const validate = require("../validationSchemas/user");
const router = express.Router();

router.get(
  "/getAll",
  passport.authenticate("jwt", { session: false }),
  admin,

  controller.getAll
);
router.get(
  "/:id",
  admin,
  passport.authenticate("jwt", { session: false }),
  controller.getById
);
router.patch(
  "/:id",
  admin,
  passport.authenticate("jwt", { session: false }),
  validate.create,
  controller.updateById
);
router.delete(
  "/:id",
  admin,
  passport.authenticate("jwt", { session: false }),
  controller.removeById
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validate.create,
  controller.create
);
module.exports = router;
