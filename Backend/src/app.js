const express = require("express");
const init = require("./loaders");
// (async () => {
try {
  const app = express();
  init(app);
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
  process.exit(1);
  // module.exports = app;
}
// })();
