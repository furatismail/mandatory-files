//instance eventSource
const evtSource = new EventSource('http://localhost:3000/event');
const eventList = document.querySelector('ul');
const button = document.querySelector('button');

console.log('readyState: ', evtSource.readyState);
console.log('url: ', evtSource.url);

evtSource.onopen = () => {
  console.log("Connection to server opened.");
};

evtSource.onmessage = (e) => {
  console.log('message', e)
  const newElement = document.createElement("li");
  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
};

evtSource.onerror = () => {
  console.log("EventSource failed.");
};

button.onclick = () => {
  console.log('Connection closed');
  evtSource.close();
};