'use strict';

var fs = require('fs'),
    path = require('path');

exports.copyFile = function copyFile(src, dest) {
    return fs.createReadStream(src).pipe(
            fs.createWriteStream(dest)
        );
};

exports.eachFiles = function eachFiles(dir, callback) {
    fs.readdirSync(dir).forEach(function(name) {
        var file = path.join(dir, name),
            stat = fs.statSync(file);

        if (stat.isFile()) {
            callback(file);
        } else if (stat.isDirectory()) {
            eachFiles(file, callback);
        }
    });
};
