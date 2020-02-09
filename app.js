const http = require('http'); // Cách sử dụng module của nodejs

const moduleOne = require('./myLibs');
const request = require('./module/helper');
const moduleTwo = require('./module/config');


http.createServer(request.onRequest).listen(moduleOne.show.port, moduleOne.show.hostname, () => {
     console.log(`Server running at http://${moduleOne.show.hostname}:${moduleOne.show.port}/`);
});

// ta có 1 tool để giải quyết vấn đề là mỗi lần sưã file là mỗi lần restart lại server.
// ta cài : nodemon.
