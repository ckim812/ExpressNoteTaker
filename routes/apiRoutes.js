const path = require("path");
const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  console.log(db);
  res.send(db);
});

router.post("/api/notes", (req, res) => {
  console.log("req.body: ", req.body);
  db.push(req.body);
  console.log("db: ", db);
  let dbString = JSON.stringify(db);
  console.log("db stringify: ", dbString);
  fs.writeFile("./db/db.json", dbString, (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log("post writefile db: ", JSON.parse(dbString));
  //   res.send(db);
});

module.exports = router;
