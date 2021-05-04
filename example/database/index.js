let nomineesDB = [
  { id: 0, name: 'Alex', votes: 0 },
  { id: 1, name: 'Alice', votes: 0 },
  { id: 2, name: 'Ben', votes: 0 },
  { id: 3, name: 'Dana', votes: 0 },
  { id: 4, name: 'Eddie', votes: 0 },
  { id: 5, name: 'Eóin', votes: 0 },
  { id: 6, name: 'Josué', votes: 0 },
  { id: 7, name: 'Katerina', votes: 0 },
  { id: 8, name: 'Kay', votes: 0 },
  { id: 9, name: 'Leo', votes: 0 },
  { id: 10, name: 'Ryan', votes: 0 },
  { id: 11, name: 'Simo', votes: 0 },
];

const getNominees = () => nomineesDB;

const addVoteToNominee = (id) => {
  const result = nomineesDB.find((n) => n.id === parseInt(id));

  result.votes++;

  return result;
};

module.exports = {
  getNominees,
  addVoteToNominee,
};
