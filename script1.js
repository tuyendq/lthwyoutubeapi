/* Codecademy: Youtube API - script1.js */
var xhr = new XMLHttpRequest();
var url = "https://www.codecademy.com/"


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhr.responseText)
    }
}
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "text/html")
xhr.setRequestHeader("Referrer Policy", "strict-origin-when-cross-origin")

xhr.open("GET", url, false);

xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);