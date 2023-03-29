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

function panier_fraicheur() {
    let container = document.querySelector(".a")
    let image = document.createElement("p");
    let string = document.createElement("p");
    let panier = data[4].paniers
    console.log(typeof(paniers))
    
    if (panier == true) {
        image.innerHTML = `<img src="img/panier-icon.svg" />`;
        string.innerHTML = `Vous pouvez récupérer votre panier fraîcheur le ${data[4].jour} de ${data[4].horaires}`;    
    } else {
        console.log("yen a pas")
        image.innerHTML = `<img src="img/nopanier-icon.svg" />`;
        string.innerHTML = "Il n'y a pas de panier fraîcheur disponible dans votre gare.";
    }   
    container.appendChild(image);
    container.appendChild(string);
}

function piano() {
    let container = document.querySelector(".b")
    let image = document.createElement("p");
    let string = document.createElement("p");
    let piano = data[4].piano
    console.log(typeof(piano))

    if (piano == true) {
        image.innerHTML = `<img src="img/piano-icon.svg" />`;
        string.innerHTML = "coucou ya un piano";
    } else {
        console.log("yen a pas")
        image.innerHTML = `<img src="img/nopiano-icon.svg" />`;
        string.innerHTML = "déso ya pas de piano";
    }   
    container.appendChild(image);
    container.appendChild(string);
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
    } else {
        console.log("yen a pas")
        image.innerHTML = `<img src="img/nowifi-icon.svg" />`;
        string.innerHTML = "Le Wifi n'est pas disponible dans votre gare.";
    }  
    container.appendChild(image);
    container.appendChild(string); 
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

function isRERC(){
    let container = document.querySelector(".e")
    let isRERC = document.createElement("p");
    let rerC = data[4].C

    if (rerC == true) {
        isRERC.innerHTML = `<div class="rerBox">
        <div class="ligne rerC">
        </div>
        <div class="logoRER">
            <svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">
                <circle fill="#FFFFFF" cx="125" cy="125" r="115.9"/>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#DC9600" d="M125,250C55.9,250,0,194.2,0,125.2C0,55.8,55.9,0,125,0c69.1,0,125,55.8,125,125.2C250,194.2,194.1,250,125,250z M125,18.6c-58.6,0-106.4,47.6-106.4,106.6c0,58.5,47.7,106.2,106.4,106.2 s106.4-47.6,106.4-106.2C231.4,66.2,183.6,18.6,125,18.6z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#DC9600" d="M170.5,179.9l-6.6-19.9c-5.7,3.4-14.1,6.2-23.3,6.2c-18.3,0-34.2-14.1-34.2-38.3c0-18.4,8.2-39.4,32.4-39.4c7.4,0,15.8,2.2,23.3,6.2l8.4-21.2c-8.4-3.8-18.9-6.7-33.2-6.7c-38.9,0-57.5,29.4-57.5,61.8c0,34.2,22.2,59.3,57.5,59.3C148.7,187.9,162.2,184.1,170.5,179.9"/>
            </svg>
        </div>
    </div>`
        container.appendChild(isRERC) 
    }
}



panier_fraicheur()
piano()
wifi()
borne()
isRERC()

let title = document.querySelector("title").textContent
console.log(title)