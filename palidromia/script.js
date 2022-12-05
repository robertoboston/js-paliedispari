let userWord= prompt('Inserisci una parola')

palindroma = (userWord)

function palindroma (word){

    let myArray = userWord.split("")

    myArray.reverse()

    let joinWord= myArray.join('')

    console.log(joinWord)

    if(word == joinWord){
        
    }
    else{
        return false
    }

}
















