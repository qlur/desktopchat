const express = require("express")
const app = express()
const port = 3000
const http = require("http").createServer(app)
const io = require("socket.io")(http)

io.on("connection",(socket)=>{
    console.log("New client is here.")

    socket.on("receiving-message", (msg)=>{
        console.log("Received New Message: ", msg);
        socket.broadcast.emit("receiving-message", msg)
        })
})


http.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})