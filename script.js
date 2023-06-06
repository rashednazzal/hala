document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  console.log("Username:", username);
  console.log("Password:", password);
  
  // Clear the text boxes
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  
  // Generate a random list of numbers
  var randomNumbers = generateRandomNumbers(10);
  console.log("Random Numbers:", randomNumbers);
  
  // Display "thank you" message
  var thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "Thank you!";
  document.getElementById("loginForm").appendChild(thankYouMessage);
});

// Function to generate a random list of numbers
function generateRandomNumbers(count) {
  var numbers = [];
  for (var i = 0; i < count; i++) {
    var randomNumber = Math.floor(Math.random() * 100);
    numbers.push(randomNumber);
  }
  return numbers;
}
