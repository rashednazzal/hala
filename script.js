document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  console.log("Username:", username);
  console.log("Password:", password);
  
  // Clear the text boxes
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  
  // Display "thank you" message
  var thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "Thank you!";
  document.getElementById("loginForm").appendChild(thankYouMessage);
});
