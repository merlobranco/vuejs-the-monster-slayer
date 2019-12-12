'use strict';

new Vue({
	el: '#app',
	data: {
		controls: false
	},
	methods: {
		startGame: function() {
			this.controls = true;
		}
	}
});