import RestaurantData from '../data/RestaurantData';
import UrlParser from '../routes/url-parser';
import creatorTemplate from '../view/templates/element-creator';
import './detailrestoitem';

class DetailResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <div class="detail-resto__container"></div>
    <liker-button></liker-button>
    `;

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailItem = document.createElement('detail-item');
    const likeFeature = this.querySelector('liker-button');
    const detailRestoContainer = this.querySelector('.detail-resto__container');

    try {
      const resto = await RestaurantData.DetailResto(url.id);
      detailItem.itemdetail = resto;
      likeFeature.resto = resto;
      detailRestoContainer.appendChild(detailItem);
    } catch (error) {
      const errorText = 'cannot fetch Resto Id, please check your connection or Resto Id';
      await creatorTemplate.errorTextElement(errorText, detailRestoContainer);
    }
  }
}

customElements.define('detail-resto', DetailResto);
