const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", socket => {
    console.log('Client Connected')
        socket.on('message', message => {
            console.log(`Recieved: ${message}`)
            socket.send(`Echo:${message}`)
        })
        
        socket.on("close", () => {
            console.log('Client Disconnected')
        })
    })
        
console.log(`Client running at ws://localhost:8080/`)
