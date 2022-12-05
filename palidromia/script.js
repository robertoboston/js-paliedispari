function wordUser (word){

    let myArray = userWord.split("")

    myArray.reverse()

    let joinWord= myArray.join('')

    console.log(joinWord)

    if(word == joinWord){
    alert('è palindroma')
    }
    else{
    alert('non è palindroma')
    }

}

let userWord= prompt('Inserisci una parola')

wordUser(userWord)


















