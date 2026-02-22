
import { navbar, attachLogoutHandler, showLogoutIfLoggedIn } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
showLogoutIfLoggedIn();
attachLogoutHandler();

const form = document.getElementById("signupForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim().toLowerCase();
  const password = form.password.value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }


  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful. Please login.");
  window.location.href = "../pages/login.html";
});
