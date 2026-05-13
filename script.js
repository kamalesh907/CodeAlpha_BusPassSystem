function sendMessage() {

    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // User Message
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    // Bot Reply
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");

    let response = getBotResponse(userInput);

    setTimeout(() => {
        botMessage.innerText = response;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    document.getElementById("user-input").value = "";
}

function getBotResponse(input) {

    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! Welcome to our website.";
    }

    else if (input.includes("price")) {
        return "Our pricing starts from ₹499.";
    }

    else if (input.includes("contact")) {
        return "You can contact us at support@example.com";
    }

    else if (input.includes("services")) {
        return "We provide cloud computing and AI services.";
    }

    else if (input.includes("bye")) {
        return "Thank you for visiting!";
    }

    else {
        return "Sorry, I didn't understand that.";
    }
}