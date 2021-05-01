class Nominee {
  constructor(name) {
    this.name = name;
    this.votes = 0;
  }

  addVote() {
    const listTags = document.getElementsByTagName("p");
    const searchText = `${this.name}: ${this.votes}`;
    let found;

    for (let i = 0; i < listTags.length; i++) {
      if (listTags[i].textContent == searchText) {
        found = listTags[i];
        break;
      }
    }

    this.votes++;

    found.innerText = `${this.name}: ${this.votes}`;
  }

  toHTML() {
    const listElement = document.createElement("li");
    const voteElement = document.createElement("button");
    const nameElement = document.createElement("p");
    const nameContent = document.createTextNode(`${this.name}: ${this.votes}`);
    const voteContent = document.createTextNode("Vote");

    voteElement.appendChild(voteContent);
    nameElement.appendChild(nameContent);
    listElement.appendChild(nameElement);
    listElement.appendChild(voteElement);

    voteElement.addEventListener("click", () => {
      this.addVote();
    });

    return listElement;
  }
}
