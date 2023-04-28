const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
require("dotenv").config();
const routesEvents = require("./routes/events");
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Available routes
app.use(express.json());

app.use("/api/v3/app", routesEvents);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("listening app at", `http://localhost:${port}`);
});
