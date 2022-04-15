<template>
<div class="board">
  <div v-for="(row, idx) in board.slice(1, -1)"
       :key="row"
       class="position"
       :class="{'valid-move': row.length >= 1}"
       v-html="createChipStack(row)"
       @click="onChipSelected(idx)"
  />
</div>
</template>

<script>
export default {
  name: 'backgammon',
  data() {
    return {
      board: [
        [], [0, 0], [], [], [], [], [1, 1, 1, 1, 1], [], [1, 1, 1], [], [], [], [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1], [], [], [], [0, 0, 0], [], [0, 0, 0, 0, 0], [], [],[], [], [1, 1], []
      ],
      currentDice: {
        roll1used: false,
        roll1: null,
        roll2: null,
        roll2used: false,
        isDouble: false
      }
    }
  },
  mounted() {
    this.rollDice()
    // Show the dice
    // add concept of player turns
  },
  methods: {
    createChipStack(row) {
      if (row.length === 0) return

      const player = row[0] === 1 ? 'player1' : 'player2'
      let ret = `<span class="chip ${player}">${row.length > 5 ? row.length - 5 : ''}</span>`
      ret += `<span class="chip ${player}"></span>`.repeat(Math.min(4, row.length - 1))
      return ret
    },
    rollDice() {
      const roll = () => Math.floor((Math.random() * 5) + 1)
      this.currentDice.roll1 = roll()
      this.currentDice.roll1Used = false
      this.currentDice.roll2 = roll()
      this.currentDice.roll2Used = false

      this.currentDice.isDouble = this.currentDice.roll1 === this.currentDice.roll2

    },
    onChipSelected(index) {
      const row = this.board[index+1]
      if (row.length === 0) return

      console.log(row)
      // highlight row
      // show available moves
    }
  }
}
</script>
