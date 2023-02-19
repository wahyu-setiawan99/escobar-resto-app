import routes from '../routes/routes';
import urlParser from '../routes/url-parser';
import swRegister from '../utils/sw-register';

const main = async () => {
  const mainContainer = document.querySelector('main');
  const renderPage = async () => {
    mainContainer.innerHTML = '';
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url] ? routes[url] : routes['/'];
    mainContainer.appendChild(page);
  };

  window.onload = () => {
    renderPage();
    swRegister();
    document.querySelector('#start-focus').focus();
  };

  window.onhashchange = () => {
    if (window.location.hash !== '#maincontent') {
      renderPage();
      document.querySelector('#start-focus').focus();
    }
    return null;
  };
};

export default main;
