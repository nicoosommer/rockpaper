let ops=["ROCK", "PAPER", "SCISSOR"];
function getComputerChoice (){

    return ops[Math.floor(Math.random()*ops.length)];
}

function round(player,pc){
    if (player===pc){
        return `It's a tie!You both chose ${player}`;
    }
    else if (player==="ROCK" && pc==="PAPER" || player==="PAPER" && pc==="SCISSOR" || player==="SCISSOR" && pc==="ROCK"){
        return `You lose! ${pc} beats ${player}`
    }
    else if (pc==="ROCK" && player==="PAPER" || pc==="PAPER" && player==="SCISSOR" || pc==="SCISSOR" && player==="ROCK"){
        return `You won! ${player} beats ${pc}`;
    }
}