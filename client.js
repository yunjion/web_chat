const form = document.querySelector("#chat-form");
const input = document.querySelector("#chat-input");
const messages = document.querySelector("#messages");

function addMessage(message) {
  const li = document.createElement("li");
  li.classList.add("is-me");
  li.textContent = message;
  messages.append(li);

  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); //화면 깜빡거리는 기본동작 막기

  const message = input.value.trim(); //앞 뒤 공백 자르기
  if (!message) return; //메시지 빈칸이면 return

  ws.send(message); //서버로 message 날리기
  addMessage(message);

  addMessage(message);

  input.value = "";
  input.focus();
});
//-------------Welcome WebSocketServer World-------------
const ws = new WebSocket(`ws://${location.host}`);

ws.onopen = () => {
  console.log("서버 연결ㄴ");
};
ws.onclose = () => {
  console.log("서버 연결 해체");
};
