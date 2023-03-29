function findGare(){
    let title = document.querySelector("title").textContent
    
    for (let i = 0;i< data.length; i++){
        if(data[i].gare == title){
            return data[i]
        }
    }
console.table(findGare())

}

function findGareIndice(){
    let title = document.querySelector("title").textContent
    
    for (let i = 0;i< data.length; i++){
        if(data[i].gare == title){
            return i
        }
    }


}