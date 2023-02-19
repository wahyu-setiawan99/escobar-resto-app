class HeroApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div tabindex="0" class="jumbotron_container">
      <div class="jumbotron_preview">
        <div class="jumbotron_image">
          <img src="./images/heros/hero-image_4.jpg" alt="escobar apps hero section">  
        </div>
      </div>
      
      <div class="jumbotron_short">
        <p>Good taste... Good food...</p>
      </div>
    
    </div>
    `;
  }
}

customElements.define('hero-app', HeroApp);
