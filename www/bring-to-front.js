var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');

function WindowBringer() {
    this.bringToFront = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'WindowBringer.bringToFront', arguments);
        exec(successCallback, errorCallback, 'WindowBringer', 'bringToFront', []);
    };
}

module.exports = new WindowBringer();