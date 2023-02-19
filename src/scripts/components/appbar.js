class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header__container">
      <div class="site-title">
        <h1><a href="">Escobar Apps</a></h1>
      </div>

      <div class="nav__container">
        <nav>
          <ul>
            <li class="burger-icon"><a href="javascript:void(0);" aria-label="navigation-menu">&#9776;</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://github.com/wahyu-setiawan99" target="_blank">About Us</a></li>
            
          </ul>
        </nav>
      </div>
    </div>
    `;

    this.querySelector('.burger-icon').addEventListener('click', () => {
      const nav = this.querySelector('.nav__container nav ul');
      if (nav.className === 'responsive') {
        nav.classList.remove('responsive');
      } else {
        nav.className += 'responsive';
      }
    });
  }
}

customElements.define('app-bar', AppBar);
