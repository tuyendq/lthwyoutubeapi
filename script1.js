/* Codecademy: Youtube API - script1.js */
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);