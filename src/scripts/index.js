import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import main from './view/main';

import './components/appbar';
import './components/heroapp';
import './components/likerfeature';
import './components/itemreview';
import './components/submitreview';
import './components/footerbar';

document.addEventListener('DOMContentLoaded', main);
