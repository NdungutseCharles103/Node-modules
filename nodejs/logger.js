var url = 'http://mylogger.io/logging';

function log(message) {
    //send http request
    console.log(message);
}
module.exports.log = log;
module.exports.endPoint = url;