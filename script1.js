/* Codecademy: Youtube API - script1.js */
var xhr = new XMLHttpRequest();
var url = "https://www.codecademy.com/"
xhr.open("GET", url, false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);