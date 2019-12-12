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