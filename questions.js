let CreationTableauLangages =  () => ["Html", "CSS", "Java", "PHP"]
// {

//     const langages = [ "Html", "CSS", "Java", "PHP"];
//     return langages;

// }

let CreationTableauNombres =  () => [...Array(6).keys()]
// {

//     let nombres = [];
//     for(i = 0; i<=5; i++){
//         nombres.push(i)
//     }
//     return nombres

// }

let RemplacementElement =  (langages) => {
    
    
    langages.splice(2, 1, "Javascript");
    return langages;

}

let AjoutElementLangages =  (langages) => {

    langages.splice(4, 0, "Ruby");
    langages.splice(5,0, "Python");
    return langages;

}

let AjoutElementNombres =  (nombres) => {
    
    nombres.splice(0,0, -2);
    nombres.splice(1,0, -1);
    return nombres;

}

let SuppressionPremierElement =  (langages) => {

    langages.shift();
    return langages

}

let SuppressionDernierElement =  (langages) => {

        langages.pop(); // 
        return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {

    return reseaux_sociaux_chaine.split(","); // use the "," to split into an array 

}

let ConversionTableauChaine =  (langages) => {

    return langages.toString(); // change an array to a string

}

let TriTableau =  (reseaux_sociaux) => {

    return reseaux_sociaux.sort(); 

}

let InversionTableau =  (reseaux_sociaux) =>{

    return reseaux_sociaux.reverse();
}
