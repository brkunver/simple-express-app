const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 80
const router = require("./routes/router");
//using other routes
app.use(router);
//serve static files
app.use(express.static(path.join(__dirname, 'public')));
// 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port);
