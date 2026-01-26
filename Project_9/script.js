const boxes = document.querySelectorAll('.box');
const statusEl = document.querySelector('.status');
const btnRestart = document.querySelector('#restart');

let x = '<img src = "./src/images/X.png" width = "50px" height = "50px" />';
let o = '<img src = "./src/images/O.png" width = "50px" height = "50px" />';

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = x;
let player = 'X';
let running = false;
init();

function init(){
    boxes.forEach(box=>box.addEventListener('click',btnClick));
    btnRestart.addEventListener('click',restartGame);
    statusEl.textContent = `${player} Your Turn`;
    running = true;
}

function btnClick(){
    const index = (this.dataset.index);
    if(options[index]!="" || !running){
        return;
    }
    update(this,index);
    displayWinner();
}

function update(box,index){
    options[index] = player;
    box.innerHTML = currentPlayer;
}

function changePlayer(){
    player = (player == "X") ? "O" : "X";
    currentPlayer = (currentPlayer == x) ? o : x;
    statusEl.textContent = `${player} Your Turn`
}

function displayWinner(){
    isWon = false;
    for(let i = 0;i < win.length;i++){
        const condition = win[i];//[0,1,2]
        const box1 = options[condition[0]];// x
        const box2 = options[condition[1]];// ''
        const box3 = options[condition[2]];// '' 
        if(box1 == "" || box2 == "" || box3 == ""){
            continue;
        }
        if(box1 == box2 && box2 == box3){
            isWon = true;
            boxes[condition[0]].classList.add('win');
            boxes[condition[1]].classList.add('win');
            boxes[condition[2]].classList.add('win');
        }
    }
    if(isWon){
        statusEl.textContent = `${player} Won...`;
        running = false;
    }else if(!options.includes("")){
        statusEl.textContent = "Game Drawn";
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame(){
    options = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = x;
    player = "X";
    running = true;
    statusEl.textContent = `${player} Your Turn`;
    boxes.forEach(box => {
        box.innerHTML = "";
        box.classList.remove('win')
    })
}