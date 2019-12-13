'use strict';

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
			let hit = this.generateHit(3, 10);
			this.monster-= hit;
			this.fight.unshift({a: hit});
			this.monsterAttack();
		},
		specialAttack: function() {
			if (this.ended)
				return;
			let hit = this.generateHit(10, 20);
			this.monster-= hit;
			this.fight.unshift({s: hit});
			this.monsterAttack();
		},
		heal: function() {
			if (this.ended)
				return;
			this.player+= 10;
			this.fight.unshift({h: 10});
			this.monsterAttack();
		},
		monsterAttack: function() {
			let hit = this.generateHit(5, 12);
			this.player-= hit;
			this.fight.unshift(hit);
			this.ended = this.checkWinner(this.player > 0, this.monster > 0);
		},
		generateHit: function (min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWinner: function (player, monster) {
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