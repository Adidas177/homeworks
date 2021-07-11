//Davit jan stringeri het kapvac xndirnere chem karoxanum anel,pordzeci tarber dzeverov bayc chstacvecin mek el arrayneri arajin xndirn el chkaroxaca erku tarber arrayner sarqel:(

//xndir 4

function onlyUnique(array){
    let result = [];
    for(let i = 0; i<array.length; i++){
        let համընկնում = false;
        for(let j = 0; j<array.length; j++){
            if(array[i] === result[j]){
                համընկնում = true;
                break;
            }
        }
        if(համընկնում === false){
        result.push(array[i]); 
        } 
    }
    return result
}