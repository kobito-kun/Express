const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var python = 0;
var clojure = 3;
var javascript = 5;

io.on('connection', (socket) => {
  io.emit('information', {
    python: python,
    clojure: clojure,
    javascript: javascript
  });
  socket.on('poll', (arg) => {
    if(arg == 'js'){
      javascript += 1 
    }else if(arg == 'py'){
      python += 1
    }else{
      clojure += 1
    }
  io.emit('information', {
    python: python,
    clojure: clojure,
    javascript: javascript
  });
  })
});

http.listen(3000, () => console.log("Listening"));