const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "/build") });
});

const PORT = parseInt(process.env.PORT) || 3200;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
