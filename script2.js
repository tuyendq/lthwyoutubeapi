var xhr = new XMLHttpRequest();
var url = "https://www.codecademy.com/files/samples/javascript_learn_apis.xml";
xhr.open("GET", url, false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
