let log = {
   info: function(message){
        console.log("info message: " + message);
    },
    warning: function(message) {
        console.warn("warning: " + message);
    },
    error: function (message) {
        console.error("error: " + message)
    }
}
module.exports = log;
