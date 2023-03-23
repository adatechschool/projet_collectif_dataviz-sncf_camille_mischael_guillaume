/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function getUrl() {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    const data = await fetch(url);
    const reponse = await data.json();
    console.log(reponse);

    let name = document.getElementById("test");
    let createName = document.createElement("ol");

    for (let i = 0; i < reponse.length; i++) {
        const element = reponse[i];
        console.log(element)
        createName.innerHTML += `<li>`+ element.name + `</li>`
        name.appendChild(createName)
        
    }
}
getUrl()