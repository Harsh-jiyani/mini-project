
async function register() {
const username = document.getElementById("registerUsername").value;
const password = document.getElementById("registerPassword").value;
const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
});
const data = await res.json();
document.getElementById("registerMessage").innerText = data.message;
}

async function login() {
const username = document.getElementById("loginUsername").value;
const password = document.getElementById("loginPassword").value;
const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
});
const data = await res.json();
if (res.ok) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
} else {
    document.getElementById("loginMessage").innerText = "Invalid credentials";
}
}