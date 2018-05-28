/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
import dice1 from '@images/dice-1.png'
import dice2 from '@images/dice-2.png'
import dice3 from '@images/dice-3.png'
import dice4 from '@images/dice-4.png'
import dice5 from '@images/dice-5.png'
import dice6 from '@images/dice-6.png'

export default {
  data() {
    return {
      playerA: {
        name: 'plaer A',
        totalScore: 0,
        currentScore: 0,
        winner: false
      },
      playerB: {
        name: 'plaer B',
        totalScore: 0,
        currentScore: 0,
        winner: false
      },
      turn: 'A',
      diceNumber1: 1,
      diceNumber2: 1,
      scoreToWin: 10
    }
  },
  computed: {
    isButtonDisabled() {
      return !!this.playerA.winner || !!this.playerB.winner
    }
  },
  methods: {
    diceImageUrl(dicenumber) {
      switch (dicenumber) {
        case 1:
          return dice1
          break
        case 2:
          return dice2
          break
        case 3:
          return dice3
          break
        case 4:
          return dice4
          break
        case 5:
          return dice5
          break
        case 6:
          return dice6
          break
      }
    },
    rollDice() {
      const random1 = Math.floor(6 * Math.random()) + 1
      const random2 = Math.floor(6 * Math.random()) + 1
      this.diceNumber1 = random1
      this.diceNumber2 = random2
      if (random1 === 1 && random2 === 1) {
        this.switchTurn()
      } else if (random1 === 6 && random2 === 6) {
        if (this.turn === 'A') {
          this.playerA.totalScore = 0
          this.playerA.currentScore = 0
        } else {
          this.playerB.totalScore = 0
          this.playerB.currentScore = 0
        }
        this.switchTurn()
      } else {
        if (this.turn === 'A') {
          this.playerA.currentScore += random1
          this.playerA.currentScore += random2
        } else {
          this.playerB.currentScore += random1
          this.playerB.currentScore += random2
        }
      }
    },
    holdScore() {
      if (this.turn === 'A') {
        this.playerA.totalScore += this.playerA.currentScore
      } else {
        this.playerB.totalScore += this.playerB.currentScore
      }
      this.checkToWin()
      if (!this.isButtonDisabled) this.switchTurn()
    },
    checkToWin() {
      if (this.playerA.totalScore >= this.scoreToWin) {
        this.playerA.name = 'winner'
        this.playerA.winner = true
      }
      if (this.playerB.totalScore >= this.scoreToWin) {
        this.playerA.name = 'winner'
        this.playerB.winner = true
      }
    },
    switchTurn() {
      this.playerA.currentScore = 0
      this.playerB.currentScore = 0
      this.turn = this.turn === 'A' ? 'B' : 'A'
    },
    gameReset() {
      const resetData = {
        totalScore: 0,
        currentScore: 0,
        winner: false
      }
      this.playerA = {
        name: 'player A',
        ...resetData
      }
      this.playerB = {
        name: 'player B',
        ...resetData
      }
      this.turn = 'A'
    }
  }
}
