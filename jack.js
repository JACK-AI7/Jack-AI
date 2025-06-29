const speakBtn = document.getElementById('speakBtn');
const output = document.getElementById('ai-output');

const synth = window.speechSynthesis;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

speakBtn.addEventListener('click', () => {
  recognition.start();
  output.textContent = "Listening...";
});

recognition.onresult = (event) => {
  const userInput = event.results[0][0].transcript.toLowerCase();
  output.textContent = `You said: "${userInput}"`;
  respondToUser(userInput);
};

function respondToUser(input) {
  let response = "I didn't understand that.";

  if (input.includes("hello") || input.includes("hi")) {
    response = "Hello! I am Jack, your AI assistant.";
  } else if (input.includes("who are you")) {
    response = "I am Jack AI, your helpful assistant integrated into this 3D viewer.";
  } else if (input.includes("model")) {
    response = "You're currently viewing a 3D model loaded from a .glb file.";
  }

  speak(response);
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
  output.textContent = `Jack says: ${text}`;
}
