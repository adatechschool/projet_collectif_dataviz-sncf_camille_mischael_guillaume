
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
        string.innerHTML = "Mélomanes exprimez-vous : un piano se trouve dans votre gare !";
        container.appendChild(image);
        container.appendChild(string);

    } else {
        image.innerHTML = `<img src="img/nopiano-icon.svg" />`;
        string.innerHTML = "Cette gare n'est pas équipée d'un piano.";
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


function isRERA(){
    let container = document.querySelector(".e")
    let isRERA = document.createElement("p");
    let rerA = data[indice].A

    if (rerA == true) {
        isRERA.innerHTML = `<div class="rerBox">
                                <div class="ligne A"></div>
                                <div class="logoRER">
                                    <svg version="1.1" id="Premier_plan" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75px" height="75px" x="0px"  y="0px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">
                                        <g>
                                            <circle fill="#FFFFFF" cx="125" cy="125" r="115.9"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF1400" d="M125,250C55.9,250,0,194.2,0,125.2C0,55.8,55.9,0,125,0 s125,55.8,125,125.2C250,194.2,194.1,250,125,250z M125,18.6c-58.6,0-106.4,47.6-106.4,106.6c0,58.5,47.7,106.2,106.4,106.2 c58.6,0,106.4-47.6,106.4-106.2C231.4,66.2,183.6,18.6,125,18.6z"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF1400" d="M179.6,185.7L138.1,68.9h-28L68.7,185.7h25.5l7.3-22.1h43.2 l7.3,22.1H179.6z M138.4,144.3h-30.5l12.1-37.2c1.5-4.6,3-10.7,3-14.7h0.3c0,3.6,1.3,9.8,3,14.7L138.4,144.3z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>`
        container.appendChild(isRERA) 
    }
}


function isRERC(){
    let container = document.querySelector(".e")
    let isRERC = document.createElement("p");
    let rerC = data[indice].C

    if (rerC == true) {
        isRERC.innerHTML = `<div class="rerBox">
        <div class="ligne C">
        </div>
        <div class="logoRER">
            <svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="75px" height="75px" x="0px" y="0px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">
                <circle fill="#FFFFFF" cx="125" cy="125" r="115.9"/>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#DC9600" d="M125,250C55.9,250,0,194.2,0,125.2C0,55.8,55.9,0,125,0c69.1,0,125,55.8,125,125.2C250,194.2,194.1,250,125,250z M125,18.6c-58.6,0-106.4,47.6-106.4,106.6c0,58.5,47.7,106.2,106.4,106.2 s106.4-47.6,106.4-106.2C231.4,66.2,183.6,18.6,125,18.6z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#DC9600" d="M170.5,179.9l-6.6-19.9c-5.7,3.4-14.1,6.2-23.3,6.2c-18.3,0-34.2-14.1-34.2-38.3c0-18.4,8.2-39.4,32.4-39.4c7.4,0,15.8,2.2,23.3,6.2l8.4-21.2c-8.4-3.8-18.9-6.7-33.2-6.7c-38.9,0-57.5,29.4-57.5,61.8c0,34.2,22.2,59.3,57.5,59.3C148.7,187.9,162.2,184.1,170.5,179.9"/>
            </svg>
        </div>
    </div>`
        container.appendChild(isRERC) 
    }
}

function isRERD(){
    let container = document.querySelector(".e")
    let isRERD = document.createElement("p");
    let rerD = data[indice].D

    if (rerD == true) {
        isRERD.innerHTML = `<div class="rerBox">
        <div class="ligne D"></div>
        <div class="logoRER">
          <svg version="1.1" id="Premier_plan" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75px" height="75px" x="0px"
           y="0px" viewBox="0 0 249.6 250" enable-background="new 0 0 249.6 250" xml:space="preserve">
      <g>
          <circle fill="#FFFFFF" cx="124.8" cy="125" r="115.9"/>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#009641" d="M124.8,250C55.8,250,0,194.2,0,125.2C0,55.8,55.8,0,124.8,0
              c69,0,124.8,55.8,124.8,125.2C249.6,194.2,193.8,250,124.8,250 M124.8,18.6c-58.6,0-106.2,47.6-106.2,106.6
              c0,58.5,47.7,106.2,106.2,106.2c58.5,0,106.2-47.7,106.2-106.2C231,66.2,183.3,18.6,124.8,18.6z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#009641" d="M179.4,124.7c0-54.9-48.4-55.7-70.8-55.7h-34v116.7h32.9
              C143.2,185.7,179.4,175.7,179.4,124.7 M152.8,126.3c0,30.6-17.2,39.2-39.7,39.2h-12.6V89.3h11.8C128.1,89.3,152.8,93.6,152.8,126.3
              z"/>
      </g>
      </svg>
      
        </div>
      </div>`
        container.appendChild(isRERD) 
    }
}

function isRERE(){
    let container = document.querySelector(".e")
    let isRERE = document.createElement("p");
    let rerE = data[indice].E

    if (rerE == true) {
        isRERE.innerHTML = `<div class="rerBox">
        <div class="ligne E"></div>
        <div class="logoRER">
          <svg version="1.1" id="Premier_plan" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75px" height="75px" x="0px"
           y="0px" viewBox="0 0 249.5 250" enable-background="new 0 0 249.5 250" xml:space="preserve">
      <g>
          <circle fill="#FFFFFF" cx="124.7" cy="125" r="115.9"/>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#DC5AB4" d="M124.7,250C55.8,250,0,194.2,0,125.2C0,55.8,55.8,0,124.7,0
              c69,0,124.7,55.8,124.7,125.2C249.5,194.2,193.7,250,124.7,250 M124.7,18.6c-58.5,0-106.2,47.6-106.2,106.6
              c0,58.6,47.6,106.2,106.2,106.2c58.5,0,106.2-47.6,106.2-106.2C230.9,66.2,183.3,18.6,124.7,18.6z"/>
          <polyline fill-rule="evenodd" clip-rule="evenodd" fill="#DC5AB4" points="162.3,186.3 162.3,165.3 113.6,165.3 113.6,134.7 
              158.2,134.7 158.2,114.6 113.6,114.6 113.6,90.6 159.8,90.6 159.8,69.6 87.6,69.6 87.6,186.3 162.3,186.3 	"/>
      </g>
      </svg>
      
        </div>
      </div>`
        container.appendChild(isRERE) 
    }
}

function isTrainR(){
    let container = document.querySelector(".e")
    let isTrainR = document.createElement("p");
    let trainR = data[indice].R

    if (trainR == true) {
        isTrainR.innerHTML = `<div class="rerBox">
        <div class="ligne R"></div>
        <div class="logoRER">
          <svg version="1.1" id="Livello_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75px" height="75px" x="0px" y="0px" viewBox="0 0 955.7 955.7"
           style="enable-background:new 0 0 955.7 955.7;" xml:space="preserve">
      <style type="text/css">
          .st0{fill:#FFFFFF;}
          .st1{fill:#E59FDB;}
      </style>
      <g>
          <path class="st0" d="M164.1,35h627.6c71.3,0,129.1,57.8,129.1,129.1v627.6c0,71.3-57.8,129.1-129.1,129.1H164.1
              C92.8,920.7,35,862.9,35,791.7V164.1C34.9,92.8,92.6,35,164.1,35L164.1,35z"/>
          <path class="st1" d="M791.7,955.7H164.1C73.6,955.7,0,882.1,0,791.7V164.1c-0.1-43.8,16.9-85,47.9-116S120.1,0,164,0h627.7
              c90.5,0,164.1,73.6,164.1,164.1v627.6C955.7,882.1,882.1,955.7,791.7,955.7z M164,70c-25.2,0-48.8,9.8-66.5,27.6
              C79.7,115.3,70,138.9,70,164v627.7c0,51.9,42.2,94.1,94.1,94.1h627.6c51.9,0,94.1-42.2,94.1-94.1V164.1c0-51.9-42.2-94.1-94.1-94.1
              C791.7,70,164,70,164,70z"/>
      </g>
      <path class="st1" d="M320.8,698.2h98v-172h29.9c19.8-0.2,35.2,4.7,46.1,14.8s19.1,28.5,24.7,55.3c6.5,27,12.3,49.1,17.4,66.3
          c5.1,17.2,9.5,29.1,13.1,35.6h101.3c-4.3-9.4-9.6-25.9-15.9-49.5c-6.6-24.6-13.2-49.2-19.8-73.8c-5.4-20.3-12.7-37.4-21.9-51.4
          c-9.3-14-21.4-24.1-36.5-30.4v-2c19.7-7,37.3-19.6,52.7-38.1c15.5-18.4,23.6-41.6,24.5-69.7c-0.1-20.1-3.5-37.8-10.4-53.1
          c-6.9-15.3-16.8-28.1-29.9-38.5c-15.5-12.2-34.8-21-58.1-26.5c-23.3-5.4-51.1-8.1-83.4-8c-26.5,0.1-51.1,0.9-73.7,2.6
          c-22.6,1.7-42,3.8-58.1,6.5L320.8,698.2L320.8,698.2L320.8,698.2z M418.8,334.1c3.5-0.7,8.8-1.4,16.1-2.1c7.2-0.7,16.8-1.1,28.7-1.1
          c22.9,0.3,40.7,5.5,53.4,15.7c12.7,10.1,19.1,25.2,19.3,45.4c-0.2,19.4-7.1,34.7-20.8,45.8c-13.7,11.2-32.9,16.9-57.8,17.1h-38.9
          L418.8,334.1L418.8,334.1L418.8,334.1z"/>
      </svg>
      
      
        </div>
      </div>`
        container.appendChild(isTrainR) 
    }
}

function isTram(){
    let container = document.querySelector(".e")
    let isTram = document.createElement("p");
    let tram = data[indice].tram

    if (tram == true) {
        isTram.innerHTML = `<div class="rerBox">
        <div class="ligne tram"></div>
        <div class="logoRER">
          <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 283.46 283.46">
            <title>Paris transit icons - Tram T4</title>
            <path fill="#FFF" d="M0,28.35h283.46v226.76H0z"/>
            <rect fill="#E3B32A" width="283.46" height="42.52" rx="14.17"/>
            <rect fill="#E3B32A" width="283.46" height="42.52" rx="14.17" y="240.94"/>
            <path fill="#25303B" d="M102.62,107.41V197H78.49V107.41H44.92V87.77h91.26v19.64zM225.7,174.23V197H204.05V174.23H154.87V154l42.37-66.2H225.7v69.45h12.84v17Zm-21.65-67.29h-.31c-.46,1.87-3.56,8.52-7.89,15.32l-22.27,35h30.47z"/>
          </svg>
        </div>
      </div>`
        container.appendChild(isTram) 
    }
}

function isM1(){
    let container = document.querySelector(".e")
    let isM1 = document.createElement("p");
    let M1 = data[indice].M1 //true

    if (M1 == true) {
        isM1.innerHTML = ` <div class="rerBox">
        <div class="ligne M1"></div>
        <div class="logoRER">
          <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 283.46 283.46">
            <title>Paris transit icons - Métro Ligne 1</title>
            <circle fill="#FFCE00" cx="141.73" cy="141.73" r="141.73"/>
            <path fill="#25303B" d="M163.59 216.72V66.53h-26.17c-14.87 11.26-33.81 21.27-49.56 27.86l10.22 23c10-4.9 24.47-11.5 33.6-18.73v118.06z"/>
          </svg>
        </div>
      </div>`
        container.appendChild(isM1) 
    }
}

function isM4(){
    let container = document.querySelector(".e")
    let isM4 = document.createElement("p");
    let M4 = data[indice].M4

    if (M4 == true) {
        isM4.innerHTML = `<div class="rerBox">
        <div class="ligne M4"></div>
        <div class="logoRER">
          <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 283.46 283.46">
            <title>Paris transit icons - Métro Ligne 4</title>
            <circle fill="#C04191" cx="141.73" cy="141.73" r="141.73"/>
            <path fill="#FFF" d="M189.09 185.34v-23.41h-17.64V66.4h-39.17L74 157.46v27.88h67.66v31.27h29.8v-31.27zm-47.44-23.41H99.74l30.63-48.07c6-9.37 10.22-18.53 10.86-21.08h.42z"/>
          </svg>
        </div>
      </div>`
        container.appendChild(isM4) 
    }
}

function isM5(){
    let container = document.querySelector(".e")
    let isM5 = document.createElement("p");
    let M5 = data[indice].M5

    if (M5 == true) {
        isM5.innerHTML = ` <div class="rerBox">
        <div class="ligne M5"></div>
        <div class="logoRER">
          <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 283.46 283.46">
            <title>Paris transit icons - Métro Ligne 5</title>
            <circle fill="#F28E42" cx="141.73" cy="141.73" r="141.73"/>
            <path fill="#25303B" d="M192.66 168.3c0-22.56-16.59-45.74-57.66-47.66-1.49 0-3.39-.21-4.25-.21l2.12-28.51h54V66.8H108l-6 78.09c4.91 0 14.91.21 23.42.21 27.65.43 34.89 15.33 34.89 26.18 0 17.66-14.67 24.69-26.37 24.69s-20.22-3.84-28.52-9.58L93.3 209.78c11.49 7 24.9 10.87 42.34 10.87 34.26 0 57-23.62 57-52.35"/>
          </svg>
        </div>
      </div>
    `
        container.appendChild(isM5) 
    }
}

function isM7(){
    let container = document.querySelector(".e")
    let isM7 = document.createElement("p");
    let M7 = data[indice].M7

    if (M7 == true) {
        isM7.innerHTML = `<div class="rerBox">
        <div class="ligne M7"></div>
        <div class="logoRER">
          <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 283.46 283.46">
            <title>Paris transit icons - Métro Ligne 7</title>
            <circle fill="#F3A4BA" cx="141.73" cy="141.73" r="141.73"/>
            <path fill="#25303B" d="M196.17 91.25V66.77H91.05v25.12h73L127.44 160c-13.19 24.46-18.51 37.23-18.51 57h34.26c0-23.61 20-68.53 53-125.75"/>
          </svg>
        </div>
      </div>
    `
        container.appendChild(isM7) 
    }
}

function isM14(){
    let container = document.querySelector(".e")
    let isM14 = document.createElement("p");
    let M14 = data[indice].M14

    if (M14 == true) {
        isM14.innerHTML = `<div class="rerBox">
        <div class="ligne M14"></div>
        <div class="logoRER">
          <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px"viewBox="0 0 283.46 283.46">
            <title>Paris transit icons - Métro Ligne 14</title>
            <circle fill="#662483" cx="141.73" cy="141.73" r="141.73"/>
            <path fill="#FFF" d="M110.19 216.84V66.6H84C69.11 77.89 50.18 87.89 34.42 94.48l10.23 23c10-4.9 24.46-11.5 33.61-18.73v118.09zM242.1 185.56v-23.42h-17.66V66.61h-39.16L127 157.68v27.88h67.66v31.27h29.79v-31.27zm-47.45-23.42h-41.91l30.63-48.07c6-9.37 10.23-18.54 10.86-21.08h.42z"/>
          </svg>
        </div>
      </div>`
        container.appendChild(isM14) 
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

panier_fraicheur()
piano()
wifi()
borne()
isRERA()
isRERC()
isRERD()
isRERE()
isTrainR()
isTram()
isM1()
isM4()
isM5()
isM7()
isM14()
proprete()