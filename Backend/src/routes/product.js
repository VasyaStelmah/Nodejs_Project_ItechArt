const express = require("express");
const router = express.Router();
const admin = require("../middleware/admin");
const passport = require("passport");
const controller = require("../controllers/product");
const validate = require("../validationSchemas/product");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAll
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

router.get(
  "/sortAscName",
  passport.authenticate("jwt", { session: false }),
  controller.getSortAscName
);
router.get(
  "/sortDescName",
  passport.authenticate("jwt", { session: false }),
  controller.getSortDescName
);
router.get(
  "/sortAscPrice",
  passport.authenticate("jwt", { session: false }),
  controller.getSortAscPrice
);
router.get(
  "/sortDescPrice",
  passport.authenticate("jwt", { session: false }),
  controller.getSortDescPrice
);
module.exports = router;
