const socket = io.connect("http://localhost:3000");

const message = document.getElementById("message");
const nickname = document.getElementById("nickname");
const btn = document.getElementById("send");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  socket.emit("chat", {
    nickname: nickname.value,
    message: message.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", {
    nickname: nickname.value,
  });
});

socket.on("chat", (data) => {
  output.innerHTML += `<p><strong>${data.nickname}: </strong> ${data.message}</p>`;
});

socket.on("typing", (data) => {
  feedback.innerHTML = `<p><em>${data.nickname}: </em> is writing....</p>`;
});
