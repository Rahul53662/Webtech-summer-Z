let attemptsLeft = 5;

const correctEmail = "admin@gmail.com";
const correctPassword = "12345";

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (attemptsLeft === 0) {
        document.getElementById("loginMessage").innerHTML =
            "Your account has been locked. No login attempts remaining.";
        document.getElementById("loginMessage").style.color = "red";
        return false;
    }

    if (email === correctEmail && password === correctPassword) {
        document.getElementById("loginMessage").innerHTML =
            "Login Successful!";
        document.getElementById("loginMessage").style.color = "green";
        return false;
    }

    attemptsLeft--;

    if (attemptsLeft > 0) {
        document.getElementById("loginMessage").innerHTML =
            "Invalid email or password. Remaining attempts: " + attemptsLeft;
        document.getElementById("loginMessage").style.color = "red";
    } else {
        document.getElementById("loginMessage").innerHTML =
            "You have used all 5 login attempts. Account locked.";
        document.getElementById("loginMessage").style.color = "red";
    }

    return false;
}