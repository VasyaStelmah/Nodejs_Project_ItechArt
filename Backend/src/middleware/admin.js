const Roles = require("../models/roles");

module.exports = async function (request, response, next) {
  const admin = await Roles.findAll({
    where: {
      admin: true,
      user_id: request.cookies.id_user,
    },
  });
  if (Object.keys(admin).length == 0) {
    response.status(403).json({
      message: "Not Admin",
    });
  } else {
    console.log("Admin");
    next();
  }
};
