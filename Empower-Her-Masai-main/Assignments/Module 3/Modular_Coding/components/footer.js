// components/footer.js
export function footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <p>© ${year} MyApp — Built for learning</p>
    </footer>
  `;
}
