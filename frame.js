class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar-logo">
          <a href="/">MBLC7的个人站</a>
        </div>
        <ul class="navbar-links">
          <li><a href="/" id="navbar-home">首页</a></li>
          <li><a href="python" id="navbar-python">Python</a></li>
        </ul>
      </nav>
    `;
    this.highlightCurrentPage();
  }

  highlightCurrentPage() {
    const path = window.location.pathname;
    const page = page.split("/").pop() || "index.html";

    if (page === "index.html" || page === "") {
      this.querySelector("#navbar-home")?.classList.add("active");
    } else if (page.includes("python")) {
      this.querySelector("#navbar-python")?.classList.add("active");
    }
  }
}
customElements.define('my-navbar', MyNavbar);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-content">
          <p>Copyright &copy; MBLC7 2026. All rights reserved.</p>
          <div class="footer-links">
            <a href="https://github.com/mblc-7" target="_blank">GitHub</a>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('my-footer', MyFooter);
