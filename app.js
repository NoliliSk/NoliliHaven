// Array to store provider information
const providers = [];

// Function to show a random quote from the Free Quotes API
function showQuote() {
    fetch("https://quotes-api-self.vercel.app/quote") // API endpoint for fetching a random quote
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("quote-display").innerText = `${data.quote} — ${data.author}`;
        })
        .catch(error => {
            document.getElementById("quote-display").innerText = "Failed to fetch quote.";
            console.error("Error fetching quote:", error);
        });
}

// Function to add a provider to the list
function addProvider() {
    const name = document.getElementById("provider-name").value.trim();
    const type = document.getElementById("provider-type").value.trim();
    const availability = document.getElementById("provider-availability").value.trim();
    const rate = document.getElementById("provider-rate").value.trim();
    const qualification = document.getElementById("provider-qualification").value.trim();

    // Create a provider object and add it to the array if all fields are filled
    if (name && type && availability && rate && qualification) {
        const provider = { name, type, availability, rate, qualification };
        providers.push(provider);

        // Clear form fields
        document.getElementById("provider-form").reset();

        // Display updated provider list
        displayProviders();
    } else {
        alert("Please fill in all fields.");
    }
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
    const userMessage = input.value.trim();
    input.value = "";

    // Add user's message to chat display
    displayMessage(userMessage, "User");

    // Bot's response based on keywords
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
    chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom
}

// Improved bot response logic based on keywords
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (userMessage.includes("help")) {
        return "I'm here to help! What do you need assistance with?";
    } else if (userMessage.includes("session") || userMessage.includes("book")) {
        return "You can book a session by selecting a provider from the list.";
    } else if (userMessage.includes("thank you")) {
        return "You're welcome! If you have more questions, feel free to ask.";
    } else {
        return "I'm not sure how to respond to that. Can you please clarify?";
    }
}

// Toggle chatbox visibility
function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "none" || chatBox.style.display === "" ? "block" : "none";
}

// Function to toggle the visibility of contact icons
function toggleContactIcons() {
   const contactIcons = document.getElementById("contact-icons");
   contactIcons.style.display = contactIcons.style.display === "none" || contactIcons.style.display === "" ? "block" : "none";
}