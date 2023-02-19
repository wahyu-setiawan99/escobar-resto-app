import creatorTemplate from '../view/templates/element-creator';

class DetailRestoitem extends HTMLElement {
  set itemdetail(itemdetail) {
    this._itemdetail = itemdetail;
    this.render();
  }

  async render() {
    this.innerHTML = `
    <div class="detail-resto__container">
      <div class="detail-resto__header">
        <img src="https://restaurant-api.dicoding.dev/images/large/${this._itemdetail.pictureId}" alt="${this._itemdetail.name}" class="detail-resto__image">
        <h3 class="loading-text__indicator">Loading image ...</h3>
      </div>

      <div class="detail-resto__name" id="maincontent">
        <h2>${this._itemdetail.name.toUpperCase()} (${this._itemdetail.rating.toFixed(1)}&#x2605)</h2>
      </div>

      <div class="detail-resto__address">
        <p>Address: ${this._itemdetail.address}, Kota ${this._itemdetail.city}</p>
      </div>

      <div class="detail-resto__preview">
        <p>${this._itemdetail.description}</p>
      </div>

      <div class="detail-resto__menu">
        <div class="detail-resto__menu-food">
          <h3>Menu food</h3>
          <ol class="menu-food__list"></ol>
        </div>
  
        <div class="detail-resto__menu-drink">
          <h3>Menu drink</h3>
          <ol class="menu-drink__list"></ol>
        </div>
      </div>
      
      <div class="detail-resto__review">
        <h3>What people say about us?</h3>
        <div class="list-review"></div>        
      </div>

      <submit-review></submit-review>
    </div>  
    `;

    const elementTab = this.querySelectorAll('.detail-resto__container div');
    const subHeadingTab = this.querySelectorAll('h3');
    const foodListContainer = this.querySelector('.menu-food__list');
    const drinkListContainer = this.querySelector('.menu-drink__list');
    const reviewListContainer = this.querySelector('.list-review');

    creatorTemplate.addAccessibilityTabindex(elementTab);
    creatorTemplate.addAccessibilityTabindex(subHeadingTab);

    this.querySelector('.detail-resto__image').addEventListener('load', () => {
      this.querySelector('.loading-text__indicator').style.display = 'none';
    });

    this._itemdetail.menus.foods.forEach((food) => {
      creatorTemplate.insertToList(food.name, foodListContainer);
    });

    this._itemdetail.menus.drinks.forEach((drink) => {
      creatorTemplate.insertToList(drink.name, drinkListContainer);
    });

    this._itemdetail.customerReviews.forEach((review) => {
      const itemReview = document.createElement('item-review');
      itemReview.review = review;
      reviewListContainer.appendChild(itemReview);
    });
  }
}

customElements.define('detail-item', DetailRestoitem);
