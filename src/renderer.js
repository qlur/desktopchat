let io = require("socket.io-client")
let socket = io("http://localhost:3000")

socket.emit("newMessage", "Hello there!")


