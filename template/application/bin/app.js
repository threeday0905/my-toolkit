'use strict';

var app = require('../'),
    port = process.env.PORT || 6001;

app.listen(port, function() {
    console.info('server listening on port  %s', port);
});
