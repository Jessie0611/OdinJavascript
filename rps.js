let userPrompt = prompt("Choose: Rock, Paper, Scissors?")

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3)
    let compPlay
    if (randomNum === 0){
        compPlay = "Rock"
    } else if (randomNum === 1){
        compPlay = "Paper"
    } else{
        compPlay = "Scissors"
    }
    return compPlay
}
let compPlay = getComputerChoice()

if (compPlay === 0 && userPrompt === 1){
    console.log("You lose, rock beats paper!")
}else (compPlay === 1 && userPrompt === 2){
    console.log("You win! Scissors beats paper!")
}


