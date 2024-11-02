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
