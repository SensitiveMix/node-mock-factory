const http = require('http');
const mockserver = require('mockserver');


http.createServer(mockserver('./test/mocks')).listen(9001);