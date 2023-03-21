const getApi1 = async () => {
    try {
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=proprete-en-gare&q=&sort=nom_gare&facet=mois&facet=nom_gare');
        console.log(data)

        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access');
    }
    
}

const getApi2 = async () => {
    try {
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=frequentation-gares&q=&sort=nom_gare&facet=nom_gare&facet=code_postal&facet=segmentation_drg')
        console.log(data)
    
        let dataJson = await data.json();
        console.log(dataJson) 
    } catch (error) {
        console.error('Failed to access');
    }
}

const getApi3 = async () => {
    try {
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=paniers-fraicheur&q=&facet=ligne&facet=service&facet=jour');
        console.log(data)
    
        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access');      
    }
}

const getApi4 = async () => {
    try {
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=enquetes-gares-connexions-repartition-par-repartition-par-categories-socio-profe&q=&sort=gare_enquetee&facet=gare_enquetee&facet=csp&facet=annee');
        console.log(data)
    
        let dataJson = await data.json();
        console.log(dataJson)    
    } catch (error) {
        console.error('Failed to access');
    }
}

const getApi5 = async () => {
    try {
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=sncf-gares-et-arrets-transilien-ile-de-france&q=&sort=libelle&facet=code_uic&facet=libelle_point_d_arret&facet=nom_gare&facet=commune&facet=zone_navigo&facet=gare_non_sncf');
        console.log(data)

        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access');
    }
    
}

const getApi6 = async () => {
    try {
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&sort=date&facet=date&facet=gc_obo_date_heure_restitution_c&facet=gc_obo_gare_origine_r_name&facet=gc_obo_nature_c&facet=gc_obo_type_c&facet=gc_obo_nom_recordtype_sc_c');
        console.log(data)

        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access');
    }
    
}

const getApi7 = async () => {
    try{
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=gares-equipees-du-wifi&q=&sort=nom_de_la_gare&facet=nom_de_la_gare&facet=service_wifi');
        console.log(data)

        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access');
    }
}

const getApi8 = async () => {
    try{
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=nombre-bornes-appel-transilien&q=&facet=gare&facet=code_uic');
        console.log(data)

        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access')
    }
}

const getApi9 = async () => {
    try{
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=sncf-lignes-par-gares-idf&q=&facet=train&facet=rer&facet=tram&facet=bus&facet=a&facet=b&facet=c&facet=d&facet=e&facet=h&facet=j&facet=k&facet=l&facet=n&facet=p&facet=r&facet=u&facet=t4&facet=t11&facet=ter');
        console.log(data)

        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access');
    }
}

const getApi10 = async () => {
    try {
        let data = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=equipements-accessibilite-gares-transilien&q=&facet=gare&refine.gare=LA+DEFENSE+GRANDE+ARCHE');
        console.log(data)
    
        let dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
        console.error('Failed to access');
    }

    
}

function getAllApi () {
getApi1()
getApi2()
getApi3()
getApi4()
getApi5()
getApi6()
getApi7()
getApi8()
getApi9()
getApi10()
}

getAllApi()