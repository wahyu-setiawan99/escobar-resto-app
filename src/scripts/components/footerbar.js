class FooterBar extends HTMLElement {
  connectedCallback() {
    setTimeout(() => {
      this.render();
    }, 500);
  }

  render() {
    this.innerHTML = `
    <div class="footer_container">
      <h4>Copyright &#169 2023 - Escobar Apps</h4>
    </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
