// Experiment 2 - Lighting up multiple LEDs in a pattern
// Turns them on one by one (and leaves them on), then turns them all off at the same time, and repeat

const five = require("johnny-five");
const Tessel = require("tessel-io");

const board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  const leds = new five.Leds(["a2", "a3", "a4", "a5", "a6", "a7"]);
  let index = 0;

  board.loop(100, () => {
    if (index === leds.length) {
      leds.off();
      index = 0;
    } else {
      leds[index].on();
      index++;
    }
  });
});
