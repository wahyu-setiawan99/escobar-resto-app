import endPointApi from '../globals/endpoint-api';
import UrlParser from '../routes/url-parser';

class SubmitReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = {
      id: url.id,
      name: this.querySelector('.feedback-name').value,
      review: this.querySelector('.feedback-content').value,
    };

    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  }

  render() {
    this.innerHTML = `
    <div class="detail-resto__post-feedback">
      <h3 tabindex="0">Post your feedback here!</h3>
      <form class="post-feedback">
        <input type="text" placeholder="Your name" class="feedback-name" maxlength="50" required>
        <textarea name="feedback-content" id="feedback-content" class="feedback-content" cols="30" rows="7" placeholder="Your feedback" maxlength="250" required></textarea>
        <button class="submit-review" type="s
        ">Submit</button>
      </form>        
    </div>
    `;

    this.querySelector('.post-feedback').addEventListener('submit', async (event) => {
      event.preventDefault();
      try {
        await fetch(endPointApi.addReview, this.value);
        const successText = document.createElement('p');
        successText.classList.add('success-text');
        successText.innerText = 'Your review has been submitted!';

        const postFeedback = this.querySelector('.post-feedback');
        postFeedback.innerHTML = '';
        postFeedback.appendChild(successText);
      } catch (error) {
        throw new Error('Cannot post review');
      }
    });
  }
}

customElements.define('submit-review', SubmitReview);
