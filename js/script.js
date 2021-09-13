/**
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
 */


// let squadre = [
//     {
//         nome: "ciao",
//         puntiFatti: 0,
//         falliSubiti: 0
//     },
//     {
//         nome: "sono",
//         puntiFatti: 0,
//         falliSubiti: 0
//     },
//     {
//         nome: "una",
//         puntiFatti: 0,
//         falliSubiti: 0
//     },
//     {
//         nome: "squadra",
//         puntiFatti: 0,
//         falliSubiti: 0
//     },
//     {
//         nome: "di",
//         puntiFatti: 0,
//         falliSubiti: 0
//     },
//     {
//         nome: "calcio",
//         puntiFatti: 0,
//         falliSubiti: 0
//     }
// ]

// for (let squadra of squadre){

//     squadra.puntiFatti = randomNumber(0,150);
//     squadra.falliSubiti = randomNumber(0,150);

// }

// console.log(squadre);

// let arrayNomiFalli = [];

// for (const squadra of squadre){

//     let {nome , falliSubiti} = squadra;
//     let ogetto = {nome, falliSubiti};

//     arrayNomiFalli.push(ogetto)
// }

// console.table(arrayNomiFalli)

// function randomNumber (min, max) {
//     return Math.floor(Math.random() * (min - max + 1) + max);
// }





/**
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */


// const bikes = [

//     {
//         name : "uno",
//         weight : 34, 
//     },
//     {
//         name : "due",
//         weight : 323,
//     },
//     {
//         name : "tre",
//         weight : 344,
//     },
//     {
//         name : "quattro",
//         weight : 32,
//     },
//     {
//         name : "cinque",
//         weight : 45,
//     }
// ]

// let lightestbike;

// for (let i = 0; i < bikes.length; i++){
//     if (!lightestbike){
//         lightestbike = bikes[i];
//         console.log(i, lightestbike)
//         continue
//     }
        
//     let { weight } = bikes[i];

//     if(weight < lightestbike.weight){
//         lightestbike = bikes[i];
//     }
//     console.log(lightestbike)
// }






// Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
// Usiamo i nuovi metodi degli array forEach() o filter().



const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = numeri[2];
const b = numeri[7]

function divisoreArray(array, numeroMin, nunmeroMax){
    const ab = numeri.filter((elemento, indice) => {
        return (indice > numeroMin && indice < nunmeroMax);
        })
        return ab;
}

console.log(divisoreArray(numeri, a, b));




