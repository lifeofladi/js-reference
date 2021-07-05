const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    //Raising an event
    this.emit("logging", { data: "from raising event" });
  }
}

module.exports = Logger;
