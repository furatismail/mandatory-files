const evtSource = new EventSource("http://localhost:3000/event");
console.log(evtSource);
const eventList = document.querySelector("ul");
const button = document.querySelector("button");

evtSource.onopen = () => {
  console.log("Connection to server opened");
};

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");
  // hello or hello world
  newElement.textContent = "message " + e.data;
  // append to <ul></ul>
  eventList.appendChild(newElement);
  console.log("message:", e);
};

evtSource.onerror = () => {
  console.log("Eventsource failed");
};

button.onclick = () => {
    evtSource.close();
}
