import express from "express";
import { router } from "./router/userRouter.js";
import dbConnection from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
let app = express();
let port = process.env.PORT || 3500;

dbConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", router);

app.listen(port, () => {
  console.log(`Server Successfully Running on port no.: ${port}`);
});
