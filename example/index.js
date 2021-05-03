const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

const nomineesDB = [
  { id: 0, name: "Alex", votes: 0 },
  { id: 1, name: "Alice", votes: 0 },
  { id: 2, name: "Ben", votes: 0 },
  { id: 3, name: "Dana", votes: 0 },
  { id: 4, name: "Eddie", votes: 0 },
  { id: 5, name: "Eóin", votes: 0 },
  { id: 6, name: "Josué", votes: 0 },
  { id: 7, name: "Katerina", votes: 0 },
  { id: 8, name: "Kay", votes: 0 },
  { id: 9, name: "Leo", votes: 0 },
  { id: 10, name: "Ryan", votes: 0 },
  { id: 11, name: "Simo", votes: 0 },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/nominees", (req, res) => {
  res.json({
    nominees: nomineesDB,
  });
});

app.post("/nominees/:id", (req, res) => {
  const newDB = nomineesDB.map((nominee) => {
    if (nominee.id !== parseInt(req.params.id)) {
      return nominee;
    }

    return { ...nominee, votes: nominee.votes + 1 };
  });
});

app.listen(port, () => {
  console.log(`Nominee API online at: http://localhost:${port}`);
});
