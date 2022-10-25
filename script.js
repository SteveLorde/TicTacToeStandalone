const cellElements = document.querySelectorAll('[data-cell]')
const X = 'x'
const CIRCLE = 'circle'
const WINCOMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const board = document.getElementById('board')
let circleTurn

startGame()

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once : true})
    })
    setBoardHoverClass()
}


function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE : X
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {

    }

    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X)
    board.classList.remove(CIRCLE)
    if (circleTurn) {
        board.classList.add(CIRCLE)
    } else {
        board.classList.add(X)
    }
}

function checkWin(currentClass) {
    return WINCOMBO.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}