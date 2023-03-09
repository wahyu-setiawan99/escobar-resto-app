import FavoriteRestaurant from '../data/favorite-resto-idb';

class LikerFeature extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this._restoDb = {
      id: resto.id,
      name: resto.name,
      city: resto.city,
      description: resto.description,
      pictureId: resto.pictureId,
      rating: resto.rating,
    };
    this.renderPage();
  }

  async isRestoinDb() {
    const favResto = await FavoriteRestaurant.getResto(this._resto.id);
    return !!favResto;
  }

  async renderPage() {
    const checkDb = await this.isRestoinDb();
    if (checkDb) {
      await this.renderLiked();
    } else {
      await this.renderUnliked();
    }
  }

  async renderUnliked() {
    this.innerHTML = `
    <div tabindex="0" aria-label="like this resto" class="liker__container">
      <i class="fa-regular fa-thumbs-up like-button"></i>
      <p>like</p>
    </div>
    `;

    this.querySelector('.like-button').addEventListener('click', async () => {
      await FavoriteRestaurant.putResto(this._restoDb);
      await this.renderPage();
    });
  }

  async renderLiked() {
    this.innerHTML = `
    <div tabindex="0" class="liker__container" aria-label="unlike this resto">
      <i class="fa-solid fa-thumbs-up liked-button"></i>
      <p>unlike</p>
    </div>
    `;

    this.querySelector('.liked-button').addEventListener('click', async () => {
      await FavoriteRestaurant.deleteResto(this._resto.id);
      await this.renderPage();
    });
  }
}

customElements.define('liker-button', LikerFeature);
