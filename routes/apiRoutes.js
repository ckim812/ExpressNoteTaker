const path = require("path");
const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid");

router.get("/api/notes", (req, res) => {
  res.send(db);
});

router.post("/api/notes", (req, res) => {
  const { title, text } = req.body; //destructure req.body; create title and text variables
  const newNote = { title, text, id: uuid() };
  db.push(newNote); // pushing new save data into db.json
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
