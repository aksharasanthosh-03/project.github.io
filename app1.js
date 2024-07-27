const predefinedResponses = {
  "hi": "Hello! How can I assist you today?",
  "hello": "Hi there! How can I help you?",
  "how are you": "I'm just a bot, but I'm here to help you!",
  "what is your name": "I'm Comfy, your friendly chatbot.",
  "bye": "Goodbye! Have a great day!",
  "about us": "Comfify offers reliable travel and booking services to help travelers find safe and suitable deals.",
  "our services":"Our services include transportation, hotel booking discounts, tourist guides, and more.",
  "get services":' Click Here to <a href="https://aksharasanthosh-03.github.io/project.github.io/Akshara/Booking/booking.html"> Book </a> to get services provided by us  ',
  "blogs":' Click Here to <a href="https://aksharasanthosh-03.github.io/project.github.io/Akshara/destination/destination.html"> Blogs </a> to decide your next trip. ',
  "help": 'Fill our <a href="https://aksharasanthosh-03.github.io/project.github.io/Sandra/contact/contact.html">Contact Us</a> form to get helped by our Experts',
  "feedback": 'Fill our <a href="https://aksharasanthosh-03.github.io/project.github.io/Sandra/comment%20box/comment%20.html">Feedback</a> to share your feedback.',
};

const options = [
  "Hi",
  "Hello",
  "How are you",
  "What is your name",
  "Bye",
  "About Us",
  "Our Services",
  "Get Services",
  "Blogs",
  "Feedback",
  "Help",
];

let chatInitialized = false;

function showOptions() {
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = "";
  options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => {
      handleUserInput(option.toLowerCase());
    });
    optionsContainer.appendChild(button);
  });
}

function handleUserInput(req) {
  if (!req) return;

  displayMessage(req, "user");

  let res;
  if (predefinedResponses[req]) {
    res = predefinedResponses[req];
  } else {
    res = "I'm sorry, I don't understand that.";
  }

  setTimeout(() => displayMessage(res, "bot"), 1000);

  scrollToBottom();
}

function displayMessage(message, sender) {
  const msgContainer = document.getElementById('msg');
  const msgElement = document.createElement('div');
  
  if (sender === 'bot') {
    msgElement.innerHTML = message; // Use innerHTML to render HTML content
  } else {
    msgElement.textContent = message;
  }

  msgElement.classList.add('msg-item');
  msgElement.classList.add(`msg-item-${sender}`);
  msgContainer.appendChild(msgElement);

  scrollToBottom();
}

function scrollToBottom() {
  const msgContainer = document.getElementById('msg');
  msgContainer.scrollTop = msgContainer.scrollHeight;
}

// Toggle chatbot visibility
document.getElementById('chat-toggle').addEventListener('click', function() {
  document.getElementById('chat-container').classList.toggle('chat-open');
  if (!chatInitialized) {
    setTimeout(() => displayMessage("Hello! How can I assist you today?", "bot"), 1000);
    setTimeout(showOptions, 1000);
    chatInitialized = true;
  }
});

// Close chatbot
document.getElementById('chat-close').addEventListener('click', function() {
  document.getElementById('chat-container').classList.remove('chat-open');
});
