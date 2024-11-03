// Array to store provider information
const providers = [];

// Function to show a random quote
function showQuote() {
    const quotes = [
        "You are stronger than you think.",
        "This too shall pass.",
        "Every day is a new beginning.",
        "Believe in yourself and all that you are.",
        "You are capable of amazing things."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").innerText = quotes[randomIndex];
}

// Function to add a provider to the list
function addProvider() {
    const name = document.getElementById("provider-name").value;
    const type = document.getElementById("provider-type").value;
    const availability = document.getElementById("provider-availability").value;
    const rate = document.getElementById("provider-rate").value;
    const qualification = document.getElementById("provider-qualification").value;

    // Create a provider object and add it to the array
    const provider = {
        name,
        type,
        availability,
        rate,
        qualification,
    };
    providers.push(provider);

    // Clear form fields
    document.getElementById("provider-form").reset();

    // Display updated provider list
    displayProviders();
}

// Function to display providers in the providers-list section
function displayProviders() {
    const providerDisplay = document.getElementById("provider-display");
    providerDisplay.innerHTML = ""; // Clear previous list

    providers.forEach((provider, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${provider.name}</strong> - ${provider.type}<br>
            <em>${provider.availability}</em><br>
            Rate: ${provider.rate}<br>
            Qualification: ${provider.qualification}<br>
            <button onclick="bookProvider(${index})">Book Now</button>
        `;
        providerDisplay.appendChild(li);
    });
}

// Placeholder function for booking a provider
function bookProvider(index) {
    alert(`You have booked ${providers[index].name}!`);
}

// Chatbox functionality
function sendMessage(event) {
    event.preventDefault();

    const input = document.getElementById("chat-input");
    const userMessage = input.value;
    input.value = "";

    // Add user's message to chat display
    displayMessage(userMessage, "User");

    // Bot's response
    const botResponse = getBotResponse(userMessage);
    displayMessage(botResponse, "Bot");
}

// Function to display messages in the chat display
function displayMessage(message, sender) {
    const chatDisplay = document.getElementById("chat-display");
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Placeholder bot response logic
function getBotResponse(userMessage) {
    const responses = [
        "I'm here to help! How can I assist you?",
        "Thank you for reaching out!",
        "Can you tell me more about your question?",
        "I appreciate your patience.",
        "Let me check that for you."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Toggle chatbox visibility
function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "none" || chatBox.style.display === "" ? "block" : "none";
}
