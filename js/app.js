'use strict';

var generateHit = function (n) {
	return Math.floor(Math.random() * n);
}

var checkWinner = function (player, monster) {
	if (!player) {
		window.alert('Sorry. Monter won this epic battle!!!');
		return true;
	}
	if (!monster) {
		window.alert('You win this epic battle!!!');
		return true;
	}
	return false;
}


new Vue({
	el: '#app',
	data: {
		controls: false,
		player: 100,
		monster: 100,
		fight: [],
		ended: false
	},
	methods: {
		startGame: function() {
			this.controls = true;
			this.fight.length = 0;
			this.player = 100;
			this.monster = 100;
			this.ended = false;
		},
		attack: function() {
			if (this.ended)
				return;
			let hit = generateHit(15);
			this.monster-= hit;
			this.fight.unshift('PLAYER HITS MONSTER FOR ' + hit);
			hit = generateHit(15);
			this.player-= hit;
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + hit);
			this.ended = checkWinner(this.player > 0, this.monster > 0);
		},
		specialAttack: function() {
			if (this.ended)
				return;
			let hit = generateHit(20);
			this.monster-= hit;
			this.fight.unshift('PLAYER HITS MONSTER FOR ' + hit);
			hit = generateHit(15);
			this.player-= hit;
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + hit);
			this.ended = checkWinner(this.player > 0, this.monster > 0);
		},
		heal: function() {
			if (this.ended)
				return;
			this.player+= 10;
			this.fight.unshift('PLAYER HEALS HIMSELF FOR 10');
			let hit = generateHit(15);
			this.player-= hit;
			this.ended = checkWinner(this.player > 0, this.monster > 0);
		}
	},
	computed: {
		healthStyle: function() {
			return {
				backgroundColor: 'green', 
				margin: 0, 
				color: 'white'
			}
		},
		playerStyle: function() {
			return {
				width: this.player + '%'
			}
		},
		monsterStyle: function() {
			return {
				width: this.monster + '%'
			}
		}
	}
});