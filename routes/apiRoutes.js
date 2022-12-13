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
  // res.send(db);
  //   let dbFile = JSON.parse(db);
  //   console.log(dbFile);
  //   let newDB = dbFile.push(req);
  //   console.log(req);
  //   console.log(newDB);
  //   res.send(dbFile);
  fs.writeFile("../db/db.json", JSON.stringify(db), (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log("post writefile db: ", db);
  //   res.send(db);
});

module.exports = router;
