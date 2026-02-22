
import { navbar, attachLogoutHandler, showLogoutIfLoggedIn } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
showLogoutIfLoggedIn();
attachLogoutHandler();

const form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim().toLowerCase();
  const password = form.password.value;

  const saved = JSON.parse(localStorage.getItem("user") || "null");

  if (!saved) {
    alert("No user found. Please sign up first.");
    window.location.href = "../pages/signup.html";
    return;
  }

  if (saved.email === email && saved.password === password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "../pages/todos.html";
  } else {
    alert("Invalid email or password.");
  }
});
