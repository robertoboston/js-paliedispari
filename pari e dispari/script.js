let pariDispari = prompt('scegli tra pari e dispari')
let numeroUtente =parseInt(prompt ('scegli un numero tra 1 e 5')) 
console.log(numeroUtente)


function numberPc(min , max){

    let numberRandom = Math.floor(Math.random() * (max - min +1) + min)
    return numberRandom
}
numberPc(1,5)

let somma= numeroUtente + numberPc(1,5)
console.log(somma)

function result (number){
    if(number %2 == 0 && pariDispari === 'pari'){
        alert(`hai vinto il numero è ${somma}`)
    }
    else if(number %2 != 0 && pariDispari =='dispari' ){
        alert(`hai vinto il numero è ${somma}`)
    }
    else{
        alert(`hai perso il numero è ${somma}`)
    }
}
result(somma)












