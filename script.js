// Simple JavaScript Program to Write to the Screen

// Function to write a message to the screen
function writeToScreen(message) {
    document.getElementById("output").innerText = message;
}

// Main program
window.onload = function() {
    // Call the function to write a message
    writeToScreen("Hello, world!");
   
};

