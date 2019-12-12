'use strict';

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