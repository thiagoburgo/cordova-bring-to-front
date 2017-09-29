var exec = require('cordova/exec');

function WindowBringer() {
    this.bringToFront = function() {
        exec(null, null, 'WindowBringer', 'bringToFront', []);
    };
}

module.exports = new WindowBringer();