import RestaurantData from '../data/RestaurantData';
import creatorTemplate from '../view/templates/element-creator';
import './itemresto';

class ListResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <section>
      <hero-app></hero-app>
    </section>
    
    <section>
      <h2>Find your restaurant!</h2>
      <div class="list-resto__container" id="maincontent"></div>
      <div class="failed-text"></div>
    </section>
    `;

    const listRestoContainer = this.querySelector('.list-resto__container');
    const failedText = this.querySelector('.failed-text');

    try {
      const listResto = await RestaurantData.ListResto();
      listResto.forEach((resto) => {
        const restoItem = document.createElement('item-resto');
        restoItem.resto = resto;
        listRestoContainer.appendChild(restoItem);
      });
    } catch (error) {
      const errorText = 'Please check your network connection!';
      creatorTemplate.errorTextElement(errorText, failedText);
    }
  }
}

customElements.define('list-resto', ListResto);
