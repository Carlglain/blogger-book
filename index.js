require("dotenv/config");
const app = require("./app.js");
const db = require("./models/index.js");
const port = process.env.PORT || 2010;
app.get("/", (req, res) => {
  res.send("Welcome to Bloogerbook");
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
