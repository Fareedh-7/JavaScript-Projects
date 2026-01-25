const boxes = document.querySelectorAll('.box');
const status = document.querySelector('.status');
const btnRestart = document.querySelector('#restart');

let x = '<img src = "./src/images/X.png" />';
let o = '<img src = "./src/images/O.png" />';

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = x;
let running = false;
init();

function init(){
    boxes.forEach(box=>box.addEventListener('click',btnClick))
}

function btnClick(){
    console.log(this.dataset.index)
}

function update(box,index){

}

function changePlayer(){

}

function displayWinner(){

}