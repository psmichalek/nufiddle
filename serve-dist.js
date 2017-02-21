const HOST_PORT = 8989;
const connect = require('connect');
const serveStatic = require('serve-static');
const open = require('open');


connect().use(serveStatic(__dirname+'/dist/index.html')).listen(HOST_PORT,function(){
    console.log('Dev server running on localhost:'+HOST_PORT);
    open('http://localhost:'+HOST_PORT);
});
