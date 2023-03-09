class ItemSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="itemresto_container">
      
      <div class="image_resto">
        <img src="./images/etc/skeleton_img.jpg" alt="skeleton" class="item-resto__image skeleton" width="100%" height="500px" >
      </div>

      <div class="detail-description_resto">
        <div class="preview_resto skeleton">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, animi provident. Repudiandae, ducimus. Voluptatibus fuga aperiam natus quasi placeat, iure odit cupiditate ipsum adipisci cum facere nisi suscipit accusantium incidunt?</p>

        </div>
      </div>
    </div>    
    `;
  }
}

customElements.define('item-skeleton', ItemSkeleton);
