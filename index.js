import { app } from "./app.js";
import "dotenv/config";

const port = process.env.PORT || 2010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
