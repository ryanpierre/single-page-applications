class NomineeList {
  constructor(nominees) {
    this.list = nominees;
  }

  toHTML() {
    const listContainer = document.createElement("ul");
    const listElements = this.list.map((nominee) => nominee.toHTML());

    listElements.forEach((listElement) =>
      listContainer.appendChild(listElement)
    );

    return listContainer;
  }
}
