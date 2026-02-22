// scripts/todos.js
import { navbar, attachLogoutHandler, showLogoutIfLoggedIn } from "../components/navbar.js";
import { footer } from "../components/footer.js";
import { displayTodos } from "../modules/displayTodos.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
showLogoutIfLoggedIn();
attachLogoutHandler();

if (!localStorage.getItem("loggedIn")) {
  alert("You must log in to view Todos.");
  window.location.href = "../pages/login.html";
} else {
  fetchAndRender();
}

async function fetchAndRender() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) throw new Error("Network response was not OK");

    const data = await res.json();
    displayTodos(data);
  } catch (err) {
    console.error(err);
    const container = document.getElementById("todos-container");
    if (container) container.innerHTML = `<p class="error">Failed to load todos. Try again later.</p>`;
  }
}
