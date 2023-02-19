import '../components/listresto';
import '../components/detailresto';
import '../components/favoriteresto';

const routes = {
  '/': document.createElement('list-resto'),
  '/favorite': document.createElement('favorite-resto'),
  '/detail/:id': document.createElement('detail-resto'),
};

export default routes;
