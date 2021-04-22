const cells = document.querySelectorAll('.cell');
const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');
const gameBoard = document.querySelector('.game-board');
const winningBoard = document.querySelector('.winning-board');
const playAgain = document.querySelector('#playAgain');
const winningMessage = document.querySelector('.winningMessage');
const xScore = document.querySelector('.x-score-container');
const yScore = document.querySelector('.y-score-container');


let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let x = '<i class="fas fa-times"></i>';
let y = '<i class="far fa-circle"></i>';

let xCount = 0;
let yCount = 0;

let lastTurn = y


for (let btn of cells) {
    btn.addEventListener('click', () => {



        if (checkSpace(btn)) {
            if (lastTurn == y) {
                btn.innerHTML = x
                lastTurn = x
            } else {
                btn.innerHTML = y;
                lastTurn = y
            }
            if (checkForWin() === 'x') {
                gameBoard.setAttribute("style", "display: none");
                winningBoard.setAttribute("style", "display: block");
                xCount += 1
                xScore.textContent = xCount
                winningMessage.innerHTML = 'PLAYER <i style="color: rgb(255, 0, 0);" class="fas fa-times"></i> WINS!!!'

            } else if (checkForWin() == 'y') {
                gameBoard.setAttribute("style", "display: none");
                winningBoard.setAttribute("style", "display: block");
                yCount += 1
                yScore.textContent = yCount
                winningMessage.innerHTML = 'PLAYER <i style="color: rgb(0, 109, 199);" class="far fa-circle"></i> WINS!!!'

            }
            if ((cell1.innerHTML != '' && cell2.innerHTML != '' && cell3.innerHTML != '' &&
                cell4.innerHTML != '' && cell5.innerHTML != '' && cell6.innerHTML != '' &&
                cell7.innerHTML != '' && cell8.innerHTML != '' && cell9.innerHTML != '')&& 
                checkForWin() == 'draw') 
                 {
                    gameBoard.setAttribute("style", "display: none");
                    winningBoard.setAttribute("style", "display: block");
                    winningMessage.innerHTML = '<h1 style="color:green;"> DRAW!!!</h1>';
            }
        } else {
            console.log('sjecdomaa')
            console.log(btn.innerHTML)
        }
    })

}
function checkSpace(game_cell) {
    if (game_cell.innerHTML == '') {
        return true;
    } else {
        return false;
    }
}

function checkForWin() {
    if ((cell1.innerHTML.includes('fas') && cell2.innerHTML.includes('fas') && cell3.innerHTML.includes('fas')) ||
        (cell1.innerHTML.includes('fas') && cell5.innerHTML.includes('fas') && cell9.innerHTML.includes('fas')) ||
        (cell1.innerHTML.includes('fas') && cell4.innerHTML.includes('fas') && cell7.innerHTML.includes('fas')) ||
        (cell4.innerHTML.includes('fas') && cell5.innerHTML.includes('fas') && cell6.innerHTML.includes('fas')) ||
        (cell7.innerHTML.includes('fas') && cell8.innerHTML.includes('fas') && cell9.innerHTML.includes('fas')) ||
        (cell2.innerHTML.includes('fas') && cell5.innerHTML.includes('fas') && cell8.innerHTML.includes('fas')) ||
        (cell3.innerHTML.includes('fas') && cell5.innerHTML.includes('fas') && cell7.innerHTML.includes('fas')) ||
        (cell3.innerHTML.includes('fas') && cell6.innerHTML.includes('fas') && cell9.innerHTML.includes('fas'))
    ) {

        return 'x';

    }
    else if ((cell1.innerHTML.includes('far') && cell2.innerHTML.includes('far') && cell3.innerHTML.includes('far')) ||
        (cell1.innerHTML.includes('far') && cell5.innerHTML.includes('far') && cell9.innerHTML.includes('far')) ||
        (cell1.innerHTML.includes('far') && cell4.innerHTML.includes('far') && cell7.innerHTML.includes('far')) ||
        (cell4.innerHTML.includes('far') && cell5.innerHTML.includes('far') && cell6.innerHTML.includes('far')) ||
        (cell7.innerHTML.includes('far') && cell8.innerHTML.includes('far') && cell9.innerHTML.includes('far')) ||
        (cell2.innerHTML.includes('far') && cell5.innerHTML.includes('far') && cell8.innerHTML.includes('far')) ||
        (cell3.innerHTML.includes('far') && cell5.innerHTML.includes('far') && cell7.innerHTML.includes('far')) ||
        (cell3.innerHTML.includes('far') && cell6.innerHTML.includes('far') && cell9.innerHTML.includes('far'))
    ) {

        return 'y'
    }
    else {
        return 'draw'
    }
}

playAgain.addEventListener('click', () => {
    gameBoard.setAttribute("style", "display: flex");
    winningBoard.setAttribute("style", "display: none");
    lastTurn = y
    for (let btn of cells) {
        btn.innerHTML = '';
    }
})