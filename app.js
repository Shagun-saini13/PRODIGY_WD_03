let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");
let newGameBtn = document.querySelectorAll("#new-btn");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.querySelectorAll("#msg");

let turnO= true; //playerX, playerO

// Winning Patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

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
        box.disabled = true;
    });
});


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // Remove hide from msg Container
    msgContainer.classList.remove("hide");
}

// Check Winner
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // Check the boxes should not be empty!
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            // check that all 3 positions have same sign 
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    console.log("Winner", pos1Val);
                    showWinner();
            }
        }
    }
}