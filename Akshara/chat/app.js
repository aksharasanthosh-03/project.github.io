// Predefined responses and options
const predefinedResponses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm here to help you!",
    "what is your name": "I'm Comfy, your friendly chatbot.",
    "bye": "Goodbye! Have a great day!",
    "about us": "Comfify offers reliable travel and booking services to help travelers find safe and suitable deals. ",
    "our services" : "Our services include transportation, hotel booking discounts, tourist guides, and more.",
    "help":"Fill our contact us form to get helped by our Experts",


  };
  
  const options = [
    "Hi",
    "Hello",
    "How are you",
    "What is your name",
    "Bye",
    "About US",
    "Our Services",
    "Help"
    
  ];
  
  function init() {
    displayMessage("Hello! How can I assist you today?", "bot");
    showOptions();
  }
  
  function showOptions() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = "";
    options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option-btn');
      button.addEventListener('click', () => handleUserInput(option.toLowerCase()));
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
  
    displayMessage(res, "bot");
  
    document.getElementById('msg_send').value = "";
    scrollToBottom();
  }
  
  function displayMessage(message, sender) {
    const msgContainer = document.getElementById('msg');
    const msgElement = document.createElement('div');
    msgElement.textContent = message;
    msgElement.classList.add('msg-item');
    msgElement.classList.add(`msg-item-${sender}`);
    msgContainer.appendChild(msgElement);
  
    scrollToBottom();
  }
  
  function scrollToBottom() {
    const msgContainer = document.getElementById('msg');
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }
  
  function sendMessage() {
    const msgInput = document.getElementById('msg_send');
    const req = msgInput.value.trim().toLowerCase();
    handleUserInput(req);
  
    msgInput.value = ""; // Clear input after sending message
  }
  
  // Toggle chatbot visibility
  document.getElementById('chat-toggle').addEventListener('click', function() {
    document.getElementById('chat-container').classList.toggle('chat-open');
  });
  
  // Close chatbot
  document.getElementById('chat-close').addEventListener('click', function() {
    document.getElementById('chat-container').classList.remove('chat-open');
  });
  
  // Event listener for Enter key press
  document.getElementById('msg_send').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  