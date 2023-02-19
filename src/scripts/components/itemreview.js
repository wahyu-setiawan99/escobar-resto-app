class ItemReview extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="item-review">
        <p tabindex="0" class="name-review">${this._review.name} (${this._review.date})</p>
        <p tabindex="0" class="content-review">"${this._review.review}"</p>
      </div>
    `;
  }
}

customElements.define('item-review', ItemReview);
