<template>
<div class="board">
  <div class="position" v-for="i in 24" :key="i">
    <span class="chip player1"></span>
    <span class="chip player2"></span>
  </div>
</div>
</template>

<script>
export default {
  name: 'backgammon',
  methods: {
    playGame() {
      const emptyBoard = [[], [0, 0], [], [], [], [], [1, 1, 1, 1, 1], [], [1, 1, 1], [], [], [], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [], [], [], [0, 0, 0], [], [0, 0, 0, 0, 0], [], [],[], [], [1, 1], []]
      this.drawBoard(emptyBoard)
      this.rollDice()
    },
    createChipStack(row) {
      const player = row[0] === 1 ? 'player1' : 'player2'
      let ret = `<span class="chip ${player}">${row.length > 5 ? row.length - 5 : ''}</span>`
      ret += `<span class="chip ${player}"></span>`.repeat(Math.min(4, row.length - 1))
      return ret
    },
    drawPosition(row) {
      const pos = document.createElement('div')
      pos.classList.add('position')

      if (row.length >= 1) {
        pos.classList.add('valid-move')
        pos.addEventListener('click', function () {
          console.log('here')
          // [...board.querySelectorAll('.position')].map(el => el.classList.remove('selected'))
          pos.classList.toggle('selected')
        })
        pos.innerHTML = createChipStack(row)
      }
      return pos
    },
    drawBoard(boardConfig) {
      const board = document.querySelector('#board')
      const playArea = boardConfig.slice(1, -1)

      const positions = playArea.map(drawPosition)
      positions.forEach((pos) => board.appendChild(pos))
    },
    rollDice() {
      const app = document.querySelector('#app')
      const roll = Math.floor((Math.random() * 5) + 1)
      app.innerHTML += `<h1 class="dice">${roll}</h1>`
      return roll
    }
  }
}
</script>
