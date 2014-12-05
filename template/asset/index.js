'use strict';

var koa   = require('koa'),
    serve = require('koa-static');

var app = koa();

/* static assets */
app.use( serve('assets') );

/* response */
app.use(function*() {
    this.body = 'Hello World';
});

module.exports = app;
