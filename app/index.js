const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/nominees", (req, res) => {
  res.json({
    nominees: [
      { id: 0, name: "Alex" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Ben" },
      { id: 3, name: "Dana" },
      { id: 4, name: "Eddie" },
      { id: 5, name: "Eóin" },
      { id: 6, name: "Josué" },
      { id: 7, name: "Katerina" },
      { id: 8, name: "Kay" },
      { id: 9, name: "Leo" },
      { id: 10, name: "Ryan" },
      { id: 11, name: "Simo" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Nominee API online at: http://localhost:${port}`);
});
