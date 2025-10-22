let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg')
const userScorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#comp-score')

const genCompchoice=()=>{
    //rock paper scissors
    const options=['rock','paper','scissors']
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
}
const drawGame=()=>{
    console.log('Game Was Draw');
    msg.innerHTML='Game Was Draw Try Again'
    
}
const showwinner=(userwin,userchoice,compChoice)=>{
if(userwin)
{
   userscore++;
   userScorepara.innerHTML=userscore;
    msg.innerHTML=`You WIn ${userchoice} beats ${compChoice}`
}
else{
    compscore++
    compscorepara.innerHTML=compscore;
     msg.innerHTML=`You Lose ${compChoice} beats ${userchoice}`
    
}
}
const playgame=(userchoice)=>{
console.log('user choice is=',userchoice);
//Generate Computer Choice;
const compChoice=genCompchoice()
console.log('computer choice=',compChoice);
if(userchoice===compChoice)
{
    drawGame()
}
else{
    let userwin=true;
    if(userchoice==='rock')
    {
        //scissor,paper
        userwin=compChoice==='paper'?false:true;
    }
    else if(userchoice==='rock'){
        //rock,scissor
         userwin=compChoice==='scissors'?false:true;
    }
    else
    {
        //rock,paper
         userwin=compChoice==='rock'?false:true;
    }
    showwinner(userwin,userchoice,compChoice)
}


}
choices.forEach((item)=>{
item.addEventListener('click',()=>{
    const userchoice=item.getAttribute('id')
    playgame(userchoice)  
})
})
