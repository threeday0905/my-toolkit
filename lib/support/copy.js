'use strict';

var fs = require('fs');

module.exports = function(source, target) {
    return fs.createReadStream(source)
        .pipe(fs.createWriteStream(target));
};
