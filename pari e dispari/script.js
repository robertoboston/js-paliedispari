let pariDispari = prompt('scegli tra pari e dispari')
let numeroUtente =parseInt(prompt ('scegli un numero tra 1 e 5')) 
console.log(numeroUtente)
let numberRandom;

function numberPc(min , max){

    numberRandom = Math.floor(Math.random() * (max - min +1) + min)
    console.log(numberRandom)
}
numberPc(1,5)

let somma= numeroUtente + numberRandom
console.log(somma)

function result (number){
    if(number %2 == 0 && pariDispari === 'pari'){
        console.log(`hai vinto il numero è ${somma}`)
    }
    else if(number %2 != 0 && pariDispari =='dispari' ){
        console.log(`hai vinto il numero è ${somma}`)
    }
    else{
        console.log(`hai perso il numero è ${somma}`)
    }
}
result(somma)











