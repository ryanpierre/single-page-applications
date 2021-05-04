class Nominee {
  constructor(nominee) {
    this.id = nominee.id;
    this.name = nominee.name;
    this.votes = nominee.votes;
  }

  addVote() {
    return new Promise((done) => {
      fetch(`http://localhost:3000/nominees/${this.id}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          this.votes = data.nominee.votes;
          done();
        });
    });
  }

  toHTML() {
    const listElement = document.createElement("li");
    const voteElement = document.createElement("button");
    const nameElement = document.createElement("p");
    const nameContent = `${this.name}: ${this.votes}`;
    const voteContent = "Vote";

    listElement.setAttribute("id", `nominee-${this.id}`);

    voteElement.innerText = voteContent;
    nameElement.innerText = nameContent;
    listElement.appendChild(nameElement);
    listElement.appendChild(voteElement);

    voteElement.addEventListener("click", () => {
      this.addVote().then(() => {
        listElement.replaceWith(this.toHTML());
      });
    });

    return listElement;
  }
}
