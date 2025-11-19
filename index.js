const app = require("./app.js");
require("dotenv/config");

const port = process.env.PORT || 2010;
app.get("/", (req, res) => {
  res.send("Welcome to Bloogerbook");
});

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
