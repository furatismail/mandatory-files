const express = require('express');
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Spusteno na ${PORT}`);
})
const socket = require('socket.io');

// REST API
app.use(express.static('public'));
app.get('/api/test', (req, res) => {
    res.send('Hello worhkkhkhkhkhkhkhkhkhkhkhkhld');
})

// SOCKET
const io = socket(server);
io.on('connection', (socket) => {
    console.log('ID klienta: ',socket.id);

    socket.on("chat", (data) => {
        io.emit("chat", data)
    })
})