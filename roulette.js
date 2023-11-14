let playerNumb = prompt("Bet number:");
let playerBet = prompt("How much do you wanna bet in each round?");
let rounds = prompt("For how many rounds do you wanna bet the same number?");
let betTotal = 0;

function game() {

const numberArray = []
for (let i = 0; i < 37  ; i++) {
    numberArray.push(i)
}

function getNumber(list) {
    return list[Math.floor((Math.random()*list.length))];
    }
    
    let rouletteNum = getNumber(numberArray);
    
    console.log(`Rolled: ${rouletteNum}`)


if (rouletteNum == playerNumb){
    return betTotal = betTotal + (playerBet * 36), console.log("WINNER WINNER CHICKEN DINNER");
} else {
    return betTotal = betTotal - playerBet;

}
}
for(let j = 0; j <= rounds; j++){
game();
}
console.log(`The play total is ${betTotal}`)

