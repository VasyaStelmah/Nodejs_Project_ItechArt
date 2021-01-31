const express = require("express");
const router = express.Router();
const admin = require("../middleware/admin");
const passport = require("passport");
const controller = require("../controllers/product");
const validate = require("../validationSchemas/product");
const { request, response } = require("express");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAll
);
router.get(
  "/filter/",
  passport.authenticate("jwt", { session: false }),
  controller.filter
);
router.get(
  "/sort",
  passport.authenticate("jwt", { session: false }),
  controller.sort
);
router.get(
  "/:id",
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
  admin,
  passport.authenticate("jwt", { session: false }),
  validate.create,
  controller.create
);
router.post(
  "/rating/:id/:number",
  passport.authenticate("jwt", { session: false }),
  controller.rating
);
module.exports = router;
// AscName;
