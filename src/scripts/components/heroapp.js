class HeroApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div tabindex="0" class="jumbotron_container">
      <div class="jumbotron_preview">
        <div class="jumbotron_image">
          <picture>
            <source media="(max-width: 400px)" srcset="./images/heros-resized/hero-image_4-400.jpg">
            <source media="(max-width: 650px)" srcset="./images/heros-resized/hero-image_4-650.jpg">
            <img src="./images/heros/hero-image_4.jpg" alt="escobar apps hero section"> 
          </picture>
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
