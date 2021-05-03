function onPageLoad() {
  console.log("Page Loaded");

  // Request the list of nominees
  fetch("http://localhost:3000/nominees", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      const { nominees } = data;

      const nomineeList = new NomineeList(
        nominees.map((nominee) => new Nominee(nominee))
      );

      document
        .getElementById("listContainer")
        .appendChild(nomineeList.toHTML());
    });
}

window.addEventListener("DOMContentLoaded", onPageLoad);
