class Nominee {
  constructor(nominee) {
    this.id = nominee.id;
    this.name = nominee.name;
    this.votes = 0;
  }

  updateText() {
    const voteTextElement = document.getElementById(`nominee-${this.id}`);
    voteTextElement.innerText = `${this.name}: ${this.votes}`;
  }

  addVote() {
    this.votes++;

    this.updateText();
  }

  toHTML() {
    const listElement = document.createElement("li");
    const voteElement = document.createElement("button");
    const nameElement = document.createElement("p");
    const nameContent = `${this.name}: ${this.votes}`;
    const voteContent = "Vote";

    nameElement.setAttribute("id", `nominee-${this.id}`);

    voteElement.innerText = voteContent;
    nameElement.innerText = nameContent;
    listElement.appendChild(nameElement);
    listElement.appendChild(voteElement);

    voteElement.addEventListener("click", () => {
      this.addVote();
    });

    return listElement;
  }
}
