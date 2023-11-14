let playerNumb = 10;
let playerBet = 1000;
let rounds = 50;
let betTotal = 0;

function game() {
    for(let j = 0; j = rounds; j++){
const numberArray = []
for (let i = 0; i < 37  ; i++) {
    numberArray.push(i)
}

function getNumber(list) {
    return list[Math.floor((Math.random()*list.length))];
    }
    
    let rouletteNum = getNumber(numberArray);
    
    console.log(`The magic number is ${rouletteNum}`)

if (rouletteNum === playerNumb){
    return betTotal = betTotal + (playerBet * 36); 
} else {
    return betTotal = betTotal - playerBet;
}
}
}
