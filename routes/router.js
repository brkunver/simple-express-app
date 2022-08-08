const express = require("express");
const path = require("path");
const router = express.Router();
// /about route
router.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "about.html"));
});
//handling / route
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
