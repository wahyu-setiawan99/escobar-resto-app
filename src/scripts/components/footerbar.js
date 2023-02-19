class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
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
