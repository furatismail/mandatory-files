const socket = io.connect('http://localhost:3000');

const message = document.getElementById('message');
const nickname = document.getElementById('nickname');
const btn = document.getElementById('send');
const output = document.getElementById('output');


//binduju klik
btn.addEventListener('click', () => {
    //posilam objekt se zpravou a prezdivkou
    socket.emit('chat', {
        message: message.value,
        nickname: nickname.value
    })
})

// poslouchame na udalost chat
socket.on("chat", (data) => {
    // zobrazujeme chat do okna output
    output.innerHTML += `<p><strong>${data.nickname}: </strong> ${data.message}</p>`
})