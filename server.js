const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synce db.");
  })
  .catch((err) => {
    console.log("Failed to synce db: ", err.message);
  });

const biodata = require("./app/controllers/biodata.controller.js");

app.post("/biodata", (req, res) => {
  biodata.create(req, res);
});

app.get("/biodata", (req, res) => {
  biodata.findAll(req, res);
});

app.get("/biodata/:id", (req, res) => {
  biodata.findOne(req, res);
});

app.put("/biodata/:id", (req, res) => {
  biodata.update(req, res);
});

app.delete("/biodata/:id", (req, res) => {
  biodata.delete(req, res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running at port ", PORT);
});
