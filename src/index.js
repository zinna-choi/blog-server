require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");

const router = require("./server/routes");

const post = require("./server/models/post");

const api = require("./server/routes");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("mongo db connection OK.");
});

app.use(express.static("public"));
app.use(express.json());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use("/api", api);

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.get("/", (req, res) => {
  res.send({ messeage: "hello,world" });
});

app.get("/api/post", function (req, res) {
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server On :http://localhost:${PORT}/`);
});
