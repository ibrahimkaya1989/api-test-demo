import XMLHttpRequest from 'xhr2';
const http = new XMLHttpRequest();

http.open("GET", "https://jsonplaceholder.typicode.com/users"); // http://127.0.0.1:3000/
http.send();

http.onload = () => console.log(http.responseText);