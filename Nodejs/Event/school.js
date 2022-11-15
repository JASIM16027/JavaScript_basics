const EventEmitter = require("events");

class School extends EventEmitter{
    StartPeriod() {

        console.log("Class Started");
      
        setTimeout(() => {
          this.emit("bellRing", {
            period: "second",
            text: " period ended",
          });
        }, 2000);
        
      }
}
module.exports = School;
