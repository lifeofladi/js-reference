const EventEmitter = require("events");
const Logger = require("./logger");
const logger = new Logger();

//Register Listener
logger.on("logging", arg => {
  console.log("Listener: ", arg);
});

logger.log("from logger");
