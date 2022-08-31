import fetch from "node-fetch";

const url = "https://www.google.com";
fetch(url)
    .then(
        response => response.text() // .json(), .blob(), etc.
    ).then(
        text => console.log(text) // Handle here
    );