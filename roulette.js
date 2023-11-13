let playerNumb = 10
let playerBet = 1000
let round = 1;

let win = playerBet * 36;

function game() {
    for(let winner = 0; winner < 1; ){

const numberArray = []
for (let i = 0; i < 37  ; i++) {
    numberArray.push(i)
}
let lose = playerBet * round;

function getNumber(list) {
return list[Math.floor((Math.random()*list.length))];
}

let rouletteNum = getNumber(numberArray);

console.log(`The magic number is ${rouletteNum}`)


if (rouletteNum === playerNumb){
    winner++, console.log(`You won $${win}`);

} else if (rouletteNum !== playerNumb){
    round++, console.log(`you lost ${lose}`)
}
console.log(`the balance is ${win - lose} `)
};

};
game();
console.log(`it took ${round} rounds to win`);