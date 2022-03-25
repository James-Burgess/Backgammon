import './style.css'

const emptyBoard = [[], [0, 0], [], [], [], [], [1, 1, 1, 1, 1], [], [1, 1, 1], [], [], [], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [], [], [], [0, 0, 0], [], [0, 0, 0, 0, 0], [], [],[], [], [1, 1], []]

const positionClick = (board, pos) => {
    [...board.querySelectorAll('.position')].map(el => el.classList.remove('selected'))
    pos.classList.toggle('selected')
}

const drawBoard = (boardConfig) => {
    const board = document.querySelector('#board')
    boardConfig.slice(1, -1).map((row) => {
        const pos = document.createElement('div')
        pos.classList.add('position')
        if (row.length >= 1) {
            pos.classList.add('valid-move')
            pos.addEventListener('click', () => positionClick(board, pos))
            pos.innerHTML = `<span class="chip ${row[0] === 1 ? 'player1' : 'player2'}">${row.length > 5 ? row.length - 5 : ''}</span>`
            pos.innerHTML += `<span class="chip ${row[0] === 1 ? 'player1' : 'player2'}"></span>`.repeat(Math.min(4, row.length - 1))
        }
        board.appendChild(pos)
    })
}

const rollDice = () => {
    const app = document.querySelector('#app')
    const roll = Math.floor((Math.random() * 5) + 1)
    app.innerHTML += `<h1 class="dice">${roll}</h1>`
    return roll
}

document.addEventListener('readystatechange', () => {
    drawBoard(emptyBoard)
    rollDice()
})
