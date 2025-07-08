let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");  // To access New Game
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnText = document.querySelector("#turn-text");

let turnO= true; //playerX, playerO
let moveCount = 0; // To count moves

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

const resetGame = () => {
    turnO = true;
    moveCount = 0; /* Reset moveCount when starting a new game */
    enableBoxes();
    msgContainer.classList.add("hide");
    turnText.innerText = "Turn: O"; // Reset turn display to "O" after reset
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO) { //player O
            box.innerText = "O";
            turnO = false;
            turnText.innerText = "Turn: X"; // Update turn display
        }
        else { //Player X
            box.innerText = "X";
            turnO = true;
            turnText.innerText = "Turn: O"; // Update turn display
        }
        box.disabled = true;

        moveCount++; /* Increment moveCount after every move */
        
        checkWinner();
    });
});

// Disabled all boxes after First Winner 
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

// Enable all boxes after New Game Starts
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // Remove hide from msg Container to display Winner
    msgContainer.classList.remove("hide");
    disableBoxes();
    turnText.innerText = ""; // Clear turn display on win
}

const showDraw = () => {
  msg.innerText = `Game is Draw!`;
  msgContainer.classList.remove("hide");
  turnText.innerText = ""; // Clear turn display on draw
};

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
                    showWinner(pos1Val);
            }
        }
    }
    count(); 
};

const count = () => {
  if (moveCount === 9) {
    showDraw();
    disableBoxes();
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);