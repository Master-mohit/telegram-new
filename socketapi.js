const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('sony', (message) => {
    console.log('Received message:', message);
    io.emit('max', message); // Broadcast the message to all connected clients
  });
});
module.exports = socketapi;