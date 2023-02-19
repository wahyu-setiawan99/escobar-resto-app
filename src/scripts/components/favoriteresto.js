import FavoriteRestaurant from '../data/favorite-resto-idb';
import creatorTemplate from '../view/templates/element-creator';
import './itemresto';

class FavoriteResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <section>
        <h2>Favorite Restaurant</h2>
        <div class="list-favorite__container" id="maincontent"></div>
      </section>
    `;

    const listFavoriteContainer = this.querySelector('.list-favorite__container');
    const listFavorite = await FavoriteRestaurant.getAllResto();
    if (listFavorite.length) {
      listFavorite.forEach((resto) => {
        const restoItem = document.createElement('item-resto');
        restoItem.resto = resto;
        listFavoriteContainer.appendChild(restoItem);
      });
    } else {
      const errorText = 'No resto add to favorite yet, please add some!';
      creatorTemplate.errorTextElement(errorText, listFavoriteContainer);
    }
  }
}

customElements.define('favorite-resto', FavoriteResto);
