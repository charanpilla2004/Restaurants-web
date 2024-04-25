document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if username and password are valid (dummy check)
    if (username === "user" && password === "123") {
      // alert("Login successful!");  // Display success message (replace with actual login logic)
      function navigateToLink() {
        // Specify the link you want to navigate to
        var link = "http://127.0.0.1:5501/HTML.html";
    
        // Navigate to the link
        window.location.href ="http://127.0.0.1:5501/HTML.html";
    }
    
    // Call the function to navigate to the link
    navigateToLink();
    } else {
      alert("Invalid username or password. Please try again."); // Display error message
    }
  });
  
  document.getElementById("forgotPasswordLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Display message (replace with actual password reset logic)
    alert("Password reset instructions have been sent to your email.");
  });


