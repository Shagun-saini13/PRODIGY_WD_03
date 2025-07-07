let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let turnO= true; //playerX, playerO

const winPatterns = {[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
        if(turnO) { //player O
            box.innerText = "O";
            turnO = false;
        }
        else { //Player X
            box.innerText = "X";
            turnO = true;
        }
    });
});