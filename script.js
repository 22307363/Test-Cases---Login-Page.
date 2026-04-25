document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // --- Task 1: Functional Testing ---

    // TC_03: Empty fields check
    if (username === "" || password === "") {
        message.textContent = "Fields cannot be empty";
        message.style.color = "red";
        return;
    }

    // TC_04: SQL Injection check
    // We check if the user entered common SQL injection characters
    if (username.includes("'") || username.includes("OR")) {
        message.textContent = "Login failed; system must prevent SQL injection and show error";
        message.style.color = "red";
        return;
    }

    // --- Task 2: Boundary Value Testing (Password Length 8-12) ---
    if (password.length < 8) {
        // TC_BV_01: Below minimum boundary
        message.textContent = "Rejected; password too short (minimum 8)";
        message.style.color = "red";
        return;
    } 
    
    if (password.length > 12) {
        // TC_BV_04: Above maximum boundary
        message.textContent = "Rejected; password too long (maximum 12)";
        message.style.color = "red";
        return;
    }

    // TC_01 & TC_02: Valid vs Invalid Login
    // Based on TC_01: Valid password is 8 characters (within boundary)
    if (username === "admin" && password === "12345678") {
        message.textContent = "User successfully logged in and redirected to dashboard";
        message.style.color = "green";
    } else {
        message.textContent = "Error message displayed: 'Invalid credentials'";
        message.style.color = "red";
    }
});
