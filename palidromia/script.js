function wordUser (word){

    let myArray = userWord.split("")

    myArray.reverse()

    let joinWord= myArray.join('')

    if(word == joinWord){
    alert('è palindroma')
    }
    else{
    alert('non è palindroma')
    }

}

let userWord= prompt('Inserisci una parola')

wordUser(userWord)


















