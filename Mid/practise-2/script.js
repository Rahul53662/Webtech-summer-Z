console.log("Connected");

function validateForm() {
    const fName = document.getElementById("firstName").value.trim();
    const lName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let isValid = true;
    
    if (!fName) {
        document.getElementById("fnameError").innerHTML = "First Name is required";
        isValid = false;
    } else if (fName.length < 4) {
        document.getElementById("fnameError").innerHTML = "First Name should be at least 4 characters";
        isValid = false;
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }

    
    if (!lName) {
        document.getElementById("lnameError").innerHTML = "Last Name is required";
        isValid = false;
    } else if (lName.length < 3) {
        document.getElementById("lnameError").innerHTML = "Last Name should be at least 3 characters";
        isValid = false;
    } else {
        document.getElementById("lnameError").innerHTML = "";
    }

    
    if (!email) {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").innerHTML = "Email must contain '@'";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    
    if (!phone) {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        isValid = false;
    } else if (phone.length !== 11) {
        document.getElementById("phoneError").innerHTML = "Phone number must be 11 digits";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    return isValid;
}