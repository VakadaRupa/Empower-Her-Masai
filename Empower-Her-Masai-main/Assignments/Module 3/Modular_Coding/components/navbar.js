// components/navbar.js
export function navbar() {
  return `
    <header class="nav-wrap">
      <nav class="nav">
        <a class="brand" href="../pages/index.html">MyApp</a>
        <div class="links">
          <a href="../pages/index.html">Home</a>
          <a href="../pages/signup.html">Signup</a>
          <a href="../pages/login.html">Login</a>
          <a href="../pages/todos.html">Todos</a>
          <button id="logoutBtn" style="display:none;">Logout</button>
        </div>
      </nav>
    </header>
  `;
}

export function attachLogoutHandler() {
  const btn = document.getElementById("logoutBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "../pages/login.html";
  });
}

export function showLogoutIfLoggedIn() {
  const btn = document.getElementById("logoutBtn");
  if (!btn) return;
  if (localStorage.getItem("loggedIn")) btn.style.display = "inline-block";
  else btn.style.display = "none";
}
