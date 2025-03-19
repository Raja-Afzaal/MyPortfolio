// Change background color when button is clicked
function changeColor() {
    let body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";  // Revert text color
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}

// Function to validate form inputs
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (name.trim() === "" || email.trim() === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

// Display welcome message when page loads
window.onload = function() {
    alert("Welcome to my portfolio!");
};

