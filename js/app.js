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
			let hit = generateHit(15);
			this.player-= hit;
			this.fight.unshift('PLAYER HITS MONSTER FOR ' + hit);
			hit = generateHit(15);
			this.monster-= hit;
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + hit);
		},
		specialAttack: function() {
			let hit = generateHit(20);
			this.player-= hit;
			this.fight.unshift('PLAYER HITS MONSTER FOR ' + hit);
			hit = generateHit(15);
			this.monster-= hit;
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + hit);
		},
		heal: function() {
			this.player+= 10;
			this.fight.unshift('PLAYER HEALS HIMSELF FOR 10');
			let hit = generateHit(15);
			this.monster-= hit;
			this.fight.unshift('MONSTER HITS PLAYER FOR ' + hit);
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