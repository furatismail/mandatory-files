const socket = io.connect("http://localhost:3000", {auth: "sdsajdojo123123ojdad"});
const message = document.getElementById('message');
const nickname = document.getElementById('nickname');
const output = document.getElementById('output');
const btn = document.getElementById('send');
const feedback = document.getElementById('feedback');

// posilame eventu chat po kliknuti na tlacitko a posilame objekt nickname a message
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        nickname: nickname.value
    })
})

message.addEventListener('keypress', () => {
    socket.emit('typing', {
        nickname: nickname.value
    })
})

socket.on("chat", (data) => {
    output.innerHTML += `<p><strong>${data.nickname}</strong>: ${data.message}</p>`
})

socket.on("typing", (data) => {
    feedback.innerHTML += `<p><strong>${data.nickname}</strong>: <em>pise zpravu ...</em></p>`
})
