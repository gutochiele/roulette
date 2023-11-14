let playerNum = prompt("In what number do you wanna bet?");
let playerBet = prompt("How much do you wanna bet in each round?");
let rounds = prompt("For how many rounds do you wanna bet the same number?");
let betTotal = 0;
let wins = 0;
let losses = 0;


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


if (rouletteNum == playerNum){
    return betTotal = betTotal + (playerBet * 36), console.log("WINNER WINNER CHICKEN DINNER"), wins++;
} else {
    return betTotal = betTotal - playerBet, losses++;

}
}
for(let j = 0; j <= rounds-1; j++){
game();
}
console.log(`Your balance is ${betTotal}`)
console.log(`You won ${wins} times`)
console.log(`You lost ${losses} times`)


