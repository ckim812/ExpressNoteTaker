const path = require("path");
const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  res.send(db);
});

router.post("/api/notes", (req, res) => {
  db.push(req.body); // pushing new save data into db.json
  let dbString = JSON.stringify(db); // changing new db to a string
  // overwriting db with new db
  fs.writeFile("./db/db.json", dbString, (err) => {
    if (err) {
      console.error(err);
    }
  });

  res.send(db);

  console.log(req);
});

module.exports = router;
