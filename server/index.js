const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    nominees: [
      "Alex",
      "Alice",
      "Ben",
      "Dana",
      "Eddie",
      "Eóin",
      "Josué",
      "Katerina",
      "Kay",
      "Leo",
      "Ryan",
      "Simo",
    ],
  });
});

app.listen(port, () => {
  console.log(`Nominee API online at: http://localhost:${port}`);
});
