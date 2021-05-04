async function onPageLoad() {
  console.log('Page Loaded');

  const response = await fetch('http://localhost:3000/nominees', { method: 'GET' });
  const { nominees } = await response.json();
  const nomineeList = new NomineeList(nominees.map((nominee) => new Nominee(nominee)));

  document.getElementById('listContainer').appendChild(nomineeList.toHTML());
}

window.addEventListener('DOMContentLoaded', onPageLoad);
