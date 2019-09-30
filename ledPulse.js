// Experiment 1 -- Blinking and Pulsing an LED

const Tessel = require("tessel-io");
const five = require("johnny-five");

const board = new five.Board({
	io: new Tessel()
});

board.on('ready', () => {
	const led = new five.Led('a5');
	led.pulse(1000);
});
