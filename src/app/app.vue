<template>
  <div class="wrapper clearfix">
    <div class="player-0-panel" v-bind:class="{ active: turn === 'A', winner: !!playerA.winner }">
      <div class="player-name">{{playerA.name}}</div>
      <div class="player-score">{{playerA.totalScore}}</div>
      <div class="player-current-box">
          <div class="player-current-label">Current</div>
          <div class="player-current-score">{{playerA.currentScore}}</div>
      </div>
    </div>
    
    <div class="player-1-panel" v-bind:class="{ active: turn === 'B', winner: !!playerB.winner }">
        <div class="player-name">{{playerB.name}}</div>
        <div class="player-score">{{playerB.totalScore}}</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">{{playerB.currentScore}}</div>
        </div>
    </div>
    
    <button class="btn-new" v-on:click="gameReset()"><i class="ion-ios-plus-outline"></i>New game</button>
    <button class="btn-roll" v-bind:disabled="isButtonDisabled" v-on:click="rollDice()"><i class="ion-ios-loop"></i>Roll dice</button>
    <button class="btn-hold" v-bind:disabled="isButtonDisabled"  v-on:click="holdScore()"><i class="ion-ios-download-outline"></i>Hold</button>
    <input type="text" v-model.number="scoreToWin" placeholder="Enter score to win.">
    
    <img :src="diceImageUrl(this.diceNumber1)" alt="Dice" class="dice">
    <img :src="diceImageUrl(this.diceNumber2)" alt="Dice" class="dice2">
  </div>
</template>

<script src="./app.js">
</script>