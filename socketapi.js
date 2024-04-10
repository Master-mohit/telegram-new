const io = require( "socket.io" )();
const socketapi = {
    io: io
};

io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    socket.on("message", (fufa)=>{
   console.log(fufa)
   socket.broadcast.emit("sony", chacha)
    })
});


module.exports = socketapi;