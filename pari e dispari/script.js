let pariDispari = prompt('scegli tra pari e dispari')
let numeroUtente =parseInt(prompt ('scegli un numero tra 1 e 5')) 
let numberRandom;

function numberPc(min , max){

    numberRandom = Math.floor(Math.random() * (max - min +1) + min)
}
numberPc(1,5)

let somma= numeroUtente + numberRandom
console.log(somma)

function result (number){
    if(number %2 == 0 && pariDispari === 'pari'){
        console.log('hai vinto il numero è pari')
    }
    else if(number %2 != 0 && pariDispari =='dispari' ){
        console.log('hai vinto il numero è dispari')
        
    }
    else{
        console.log('hai perso')
    }
}
result(somma)











