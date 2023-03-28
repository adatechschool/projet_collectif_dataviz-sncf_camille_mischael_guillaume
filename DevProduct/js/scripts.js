/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// async function getUrl() {
//     const url = 'https://jsonplaceholder.typicode.com/users/';
//     const data = await fetch(url);
//     const reponse = await data.json();
//     console.log(reponse);

//     let name = document.getElementById("test");
//     let createName = document.createElement("ol");

//     for (let i = 0; i < reponse.length; i++) {
//         const element = reponse[i];
//         console.log(element)
//         createName.innerHTML += `<li>`+ element.name + `</li>`
//         name.appendChild(createName)
        
//     }
// }
// getUrl()

console.log(data[4].piano)

function piano() {
    let container = document.querySelector(".b")
    let image = document.createElement("p");
    let string = document.createElement("p");
    let piano = data[4].piano
    console.log(typeof(piano))

    if (piano == true) {
        image.innerHTML = `<img src="img/piano-icon.svg" />`;
        string.innerHTML = "coucou ya un piano";
        container.appendChild(image);
        container.appendChild(string);

    } else {
        console.log("yen a pas")
        image.innerHTML = `<img src="img/nopiano-icon.svg" />`;
        string.innerHTML = "déso ya pas de piano";
        container.appendChild(image);
        container.appendChild(string);
    }   
}


function panier_fraicheur() {
    let container = document.querySelector(".a")
    let image = document.createElement("p");
    let string = document.createElement("p");
    let panier = data[4].paniers
    console.log(typeof(paniers))
    
    if (panier == true) {
        image.innerHTML = `<img src="img/panier-icon.svg" />`;
        string.innerHTML = `Vous pouvez récupérer votre panier fraîcheur le ${data[4].jour} de ${data[4].horaires}`;
        container.appendChild(image);
        container.appendChild(string);
        
    } else {
        console.log("yen a pas")
        image.innerHTML = `<img src="img/nopanier-icon.svg" />`;
        string.innerHTML = "Il n'y a pas de panier fraîcheur disponible dans votre gare.";
        container.appendChild(image);
        container.appendChild(string);
    }   
}

function wifi() {
    let container = document.querySelector(".d")
    let image = document.createElement("p");
    let string = document.createElement("p");
    let wifi = data[4].Wifi
    console.log(typeof(wifi))
    
    if (wifi == true) {
        image.innerHTML = `<img src="img/wifi-icon.svg" />`;
        string.innerHTML = `Profitez du Wifi gratuit dans votre gare.`;
        container.appendChild(image);
        container.appendChild(string);
        
    } else {
        console.log("yen a pas")
        image.innerHTML = `<img src="img/nowifi-icon.svg" />`;
        string.innerHTML = "Le Wifi n'est pas disponible dans votre gare.";
        container.appendChild(image);
        container.appendChild(string);
    }   
}

function borne() {
    let container = document.querySelector(".c")
    let image = document.createElement("p");
    let string = document.createElement("p");
    let borne = data[4].bornes
    console.log(typeof(borne))
    
    image.innerHTML = `<img src="img/sos-icon.svg" />`;
    string.innerHTML = `Vous avez ${borne} bornes d'appel disponibles dans votre gare.`;
    container.appendChild(image);
    container.appendChild(string);
        
    
}



panier_fraicheur()
piano()
wifi()
borne()

let title = document.querySelector("title").textContent
console.log(title)