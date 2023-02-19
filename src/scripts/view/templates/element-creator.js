/* eslint-disable no-param-reassign */
const creatorTemplate = {
  async errorTextElement(errorText, errorContainer) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-element');
    errorElement.innerText = errorText;
    errorContainer.appendChild(errorElement);
  },

  async insertToList(menu, menuContainer) {
    const listElement = document.createElement('li');
    listElement.tabIndex = 0;
    const listText = document.createElement('p');
    listText.innerText = menu;
    listElement.append(listText);
    menuContainer.appendChild(listElement);
  },

  async addAccessibilityTabindex(elements) {
    elements.forEach((element) => {
      element.tabIndex = 0;
    });
  },

};

export default creatorTemplate;
