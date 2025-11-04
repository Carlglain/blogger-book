import express, { urlencoded } from "express";
import cors from "cors";
const app = express();

app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  urlencoded({
    limit: "16kb",
  })
);
app.use(express.static("public"));

export { app };
