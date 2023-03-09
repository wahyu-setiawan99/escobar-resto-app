class ItemResto extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div tabindex="0" class="itemresto_container">
      
      <div class="image_resto">
        <img  src="./images/etc/skeleton_img.jpg" alt="${this._resto.name}" width="100%" height="500px" class="item-resto__image lazyload"
          data-src="https://restaurant-api.dicoding.dev/images/medium/${this._resto.pictureId}">
        <p class="loading-text__indicator-item">Loading image ...</p>
      </div>

      <div class="city_resto">
        <p>${this._resto.city}</p>
      </div>

      <div class="detail-description_resto">
        <div class="rating_resto">
          <p>Rating: ${this._resto.rating.toFixed(1)} &#x2605</p>
        </div>

        <div class="name_resto">
          <h3><a href="/#/detail/${this._resto.id}">${this._resto.name}</a></h3>

        </div>

        <div class="preview_resto">
          <p>${this._resto.description}</p>

        </div>
      </div>
    </div>    
    `;

    this.querySelector('.item-resto__image').addEventListener('load', () => {
      this.querySelector('.loading-text__indicator-item').style.display = 'none';
    });
  }
}

customElements.define('item-resto', ItemResto);
