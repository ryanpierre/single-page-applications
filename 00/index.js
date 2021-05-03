async function getNominees() {
  return [
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
  ];
}

function onPageLoad() {
  console.log("Page Loaded");

  // Request the list of nominees
  fetch("http://localhost:3000", { method: "GET" })
    .then((response) => response.json())
    .then((data) => console.log(data.nominees));
}

window.addEventListener("DOMContentLoaded", onPageLoad);
