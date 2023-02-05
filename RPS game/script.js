function getcomputerchoice(){
    const choice = ['Rock','Paper','Scissor']
    randomNumber = Math.floor(Math.random()*3)
    return choice[randomNumber]


}

const totalscore = {'computerscore':0, 'playerscore':0}
function getresult(playerchoice,computerchoice){
    let score;
    if (playerchoice==computerchoice){
        score = 0
    }
    else if (playerchoice == 'Rock' && computerchoice == 'Scissor'){
        score = 1
    }
    else if (playerchoice == 'paper' && computerchoice == 'Rock'){
        score = 1
    }
    else if (playerchoice == 'Scissor' && computerchoice == 'Paper'){
        score = 1
    }
    else{
        score = -1
    }
    return score

}
function showresult(score,playerchoice,computerchoice){
    const Result = document.getElementById('result')
    const Hands = document.getElementById('hand')
    const Playscore = document.getElementById('playscore')
    if (score == 0){
        Result.innerText = "It's a tie!"
    } 
    else if (score == -1){
        Result.innerText = "You lose!"
    }
    else {
        Result.innerText = "You won!"
    }
    Hands.innerText = `🧑${playerchoice} vs  🤖${computerchoice}`
    Playscore.innerText = `Your score:${totalscore['playerscore']}`

}
function onclickRPS(playerchoice){
    console.log({playerchoice})
    let computerchoice = getcomputerchoice()
    console.log({computerchoice})
    score = getresult(playerchoice,computerchoice)
    totalscore['playerscore'] +=score
    showresult(score,playerchoice,computerchoice)
    console.log({score})
    console.log(totalscore['playerscore'])
    
    const End = document.getElementById('end')
    End.onclick = () => endgame(totalscore)


}

function playgame(){
    const RPSbuttons = document.querySelectorAll('.rpsbutton')
    
    RPSbuttons.forEach(RPSbutton=> {
        RPSbutton.onclick = () => onclickRPS(RPSbutton.value)
        
    });
}

function endgame(totalscore){
    totalscore['playerscore'] = 0
    totalscore['computerscore'] = 0


    const Result = document.getElementById('result')
    const Hands = document.getElementById('hand')
    const Playscore = document.getElementById('playscore')
     Result.innerText = ''
     Hands.innerText = ''
     Playscore.innerText = ''

}
playgame()