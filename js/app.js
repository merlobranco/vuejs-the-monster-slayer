'use strict';

var generateHit = function (n) {
	return Math.floor(Math.random() * n);
}

new Vue({
	el: '#app',
	data: {
		controls: false,
		player: 100,
		monster: 100,
		fight: []
	},
	methods: {
		startGame: function() {
			this.controls = true;
			this.fight.length = 0;
			this.player = 100;
			this.monster = 100;
		},
		attack: function() {
			this.fight.unshift('PLAYER HITS MONSTER FOR ' + generateHit(15));
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + generateHit(15));
		},
		specialAttack: function() {
			this.fight.unshift('PLAYER HITS MONSTER FOR ' + generateHit(20));
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + generateHit(15));
		},
		heal: function() {
			this.fight.unshift('PLAYER HEALS HIMSELF FOR 10';
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + generateHit(15));
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