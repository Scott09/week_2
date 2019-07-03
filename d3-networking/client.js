const net = require('net');

net.createServer({
  host : '192.168.88.52', 
  port : 9999
});


var client = new net.Socket();
client.connect(9999, '192.168.88.52', function() {
  console.log('Connected');
  client.write('Anything is possible. At client.com');
});
