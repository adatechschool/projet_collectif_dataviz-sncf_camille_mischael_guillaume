

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

function findGareIndice(){
    let title = document.querySelector("title").textContent
    
    for (let i = 0;i< data.length; i++){
        if(data[i].gare == title){
            return i
        }
    }


}

let indice = findGareIndice()

function piano() {
    let container = document.querySelector(".b")
    let image = document.createElement("p");
    let string = document.createElement("p");
    let piano = data[indice].piano

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
    let panier = data[indice].paniers
    

    
    if (panier == true) {
        image.innerHTML = `<img src="img/panier-icon.svg" />`;
        string.innerHTML = `Vous pouvez récupérer votre panier fraîcheur le ${data[indice].jour} de ${data[indice].horaires}`;
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
    let wifi = data[indice].Wifi
    
    
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
    let borne = data[indice].bornes
    
    
    image.innerHTML = `<img src="img/sos-icon.svg" />`;
    string.innerHTML = `Vous avez ${borne} bornes d'appel disponibles dans votre gare.`;
    container.appendChild(image);
    container.appendChild(string);
        
    
}


function isRERC(){
    let container = document.querySelector(".e")
    let isRERC = document.createElement("p");
    let rerC = data[indice].C

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

function proprete () {
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Taux 2019', 'Taux 2020', 'Taux 2021', 'Taux 2022', 'Taux 2022'],
      datasets: [
        {
        label: 'Taux de propreté en gare',
        data: [data[indice].proprete2019, data[indice].proprete2020, data[indice].proprete2021, data[indice].proprete2022, data[indice].proprete2023, ],
        borderWidth: 1,
        backgroundColor: "#0088ce",
        hoverBorderWidth: 50,
        
        }
    ]
    },
    options: {
      scales: {
        y: {
            min: 80,
            max: 100
        }
      }
    }
  });
}

findGareIndice()
panier_fraicheur()
piano()
wifi()
borne()
isRERC()
proprete()