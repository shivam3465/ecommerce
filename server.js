import { app } from "./app.js";
import { config } from "dotenv";
import { connectDB } from "./data/database.js";

config({ path: "./data/config.env" });
connectDB();


app.get("/", (req, res) =>
  res.json({ success: true, message: "welcome to home page" })
);

app.listen(process.env.PORT, () =>
  console.log("listening on port " + process.env.PORT)
);
