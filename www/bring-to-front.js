var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');

function WindowBringer() {
    this.bringToFront = function() {
        argscheck.checkArgs('fF', 'WindowBringer.bringToFront', arguments);
        exec(null, null, 'WindowBringer', 'bringToFront', []);
    };
}

module.exports = new WindowBringer();