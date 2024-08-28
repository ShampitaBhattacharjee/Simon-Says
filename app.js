let body=document.querySelector("body");
let head=document.querySelector("h2");
let hscore=document.querySelector("h3");
let boxes=document.querySelectorAll(".btn");
let btn_color= ['red','green','blue','yellow'];

let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let highScore=0;

body.addEventListener('keypress', function(){
    if(started==false){
        console.log('Start Game!');
        started=true;
    }
    levelUp();
})

function flashButton(blink){
    if(blink==0 || blink=='red'){
        console.log('Entered');
        boxes[blink].classList.add('flashRed');
        setTimeout(function(){
            boxes[blink].classList.remove('flashRed');
        }, 250);
    }
    else if(blink==1 || blink=='green'){
        console.log('Entered');
        boxes[blink].classList.add('flashGreen');
        setTimeout(function(){
            boxes[blink].classList.remove('flashGreen');
        }, 250);
    }
    else if(blink==2 || blink=='blue'){
        console.log('Entered');
        boxes[blink].classList.add('flashBlue');
        setTimeout(function(){
            boxes[blink].classList.remove('flashBlue');
        }, 250);
    }
    else if(blink==3|| blink=='yellow'){
        boxes[blink].classList.add('flashYellow');
        setTimeout(function(){
            boxes[blink].classList.remove('flashYellow');
        }, 250);
    }
}

function levelUp(){
    userSeq=[];
    level++;
    if(level>highScore){
        highScore=level;
        hscore.innerText=`Your Highest Score is ${highScore}`;
    }
    head.innerText=`Level ${level}`;
    let blink= Math.floor (Math.random()*4);
    flashButton(blink);
    gameSeq.push(blink);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        head.innerHTML=`Game Over! Your score was <b>${level}</b> Press any key to restart. Press any key to restart`;
        body.style.backgroundColor='red';
        setTimeout(function(){
            body.style.backgroundColor="white";
        }, 200);
        reset();
    }
}

function btnPress(){
    let btn= `${this.classList[1]}`;
    let index= btn_color.indexOf(btn);
    flashButton(index);
    userSeq.push(index);
    checkAns(userSeq.length-1);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

for(box of boxes){
    box.addEventListener("click", btnPress);
}
