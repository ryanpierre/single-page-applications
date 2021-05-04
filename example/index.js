const express = require('express');
const cors = require('cors');
const database = require('./database');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // Renders the single page application
  res.render('index');
});

app.get('/nominees', (req, res) => {
  // Returns all nominees
  res.json({
    nominees: database.getNominees(),
  });
});

app.post('/nominees/:id', (req, res) => {
  // Returns the updated Nominee after adding a vote
  res.json({
    nominee: database.addVoteToNominee(req.params.id),
  });
});

app.listen(port, () => {
  console.log(`Nominee API online at: http://localhost:${port}`);
});
