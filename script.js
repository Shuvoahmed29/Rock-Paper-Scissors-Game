let userScore = 0, compScore = 0, drawScore = 0;
let message = document.querySelector('#message');
let draw = document.querySelector('#drawScore');
let yourScore = document.querySelector('#yourScore');
let lose = document.querySelector('#compScore');

function computerSelect(){
    let arr = ['rock','paper','scissor'];
    let randomIndex = Math.floor(Math.random()*3);
    return arr[randomIndex];
}

function drawHandle(){
    drawScore++;
    message.innerText = 'Match is Draw';
    message.style.backgroundColor = "DarkSlateGray";
    draw.innerText = drawScore;
}

function winTest(userResult){
    if(userResult){
        userScore++;
        message.innerText = 'Congratulations You Win!';
        message.style.backgroundColor = "green";
        yourScore.innerText = userScore;
    }else{
        compScore++;
        message.innerText = 'Bad Luck You Lose!';
        message.style.backgroundColor = "blueviolet";
        lose.innerText = compScore;
    }
}

function operation(userSelect){
    let comSelect = computerSelect();
    
    let p = document.querySelector('#show');
    p.innerText = `Your Choice: ${userSelect} and Computer Choice: ${comSelect}`;
    if(userSelect===comSelect){
        drawHandle();
    }else{
        let userResult = true;
        if(userSelect==='rock'){
            userResult = comSelect==='paper'? false:true;
        }else if(userSelect==='paper'){
            userResult = comSelect==='scissor'? false:true;
        }else{
            userResult = comSelect==='rock'? false:true;
        }
        winTest(userResult);
    }
}

let rock = document.querySelector('#Rock');
rock.onclick = () =>{
    operation('rock');
}

let paper = document.querySelector('#Paper');
paper.onclick = () =>{
    operation('paper');
}

let scissor = document.querySelector('#Scissors');
scissor.onclick = () =>{
    operation('scissor');
}


