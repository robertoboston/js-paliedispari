let pariDispari = prompt('scegli tra pari e dispari')
let numeroUtente =parseInt(prompt ('scegli un numero tra 1 e 5')) 

function numberPc(min , max){
    let numberRandom = Math.floor(Math.random() * (max - min +1) + min)
    console.log(numberRandom)

    let somma = numeroUtente + numberRandom

    console.log(somma)

    if(somma % 2 == 0){
        
    }



}
numberPc(1,5)

