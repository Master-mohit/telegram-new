const io = require( "socket.io" )();
const socketapi = {
    io: io
};

io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    socket.on("message", (fufa)=>{
   console.log(fufa)

   socket.broadcast.emit("sony", fufa)
    })
    socket.on("photo", function(photoData) {
        console.log("Received photo:", photoData);
        socket.broadcast.emit("photo", photoData); 
      });
});


module.exports = socketapi;