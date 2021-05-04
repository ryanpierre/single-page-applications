async function onPageLoad() {
  console.log('Page Loaded');

  // Request the list of nominees
  const response = await fetch('http://localhost:3000/nominees', { method: 'GET' });
  const responseJSON = await response.json();

  console.log(responseJSON.nominees);
}

window.addEventListener('DOMContentLoaded', onPageLoad);
