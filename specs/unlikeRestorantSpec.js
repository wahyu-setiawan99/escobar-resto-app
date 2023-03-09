import '../src/scripts/components/likerfeature';
import FavoriteRestaurant from '../src/scripts/data/favorite-resto-idb';

describe('Unlike the restaurant', () => {
  const resto = {
    id: 123,
    name: 'Resto Name',
    city: 'City',
    description: 'Resto description',
    pictureId: '12345',
    rating: 4.5,
  };

  const addButtonLikeContainer = async (restoProp) => new Promise((resolve) => {
    document.body.innerHTML = '';
    const likerFeature = document.createElement('liker-button');
    likerFeature.resto = restoProp;
    document.body.appendChild(likerFeature);
    setTimeout(() => resolve(), 0);
  });

  beforeEach(async () => {
    await FavoriteRestaurant.putResto(resto);
    await addButtonLikeContainer(resto);
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteResto(123);
  });

  it('should show the unlike button if restorant has been liked ', async () => {
    expect(document.querySelector('.liked-button')).toBeTruthy();
  });

  it('should not show the like button if restorant has been liked ', async () => {
    expect(document.querySelector('.like-button')).toBeFalsy();
  });

  it('should be able to remove the favorite restaurant from the list ', async () => {
    document.querySelector('.liked-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllResto()).toEqual([]);
  });

  it('should not throw error if unliked restaurant is not on the favorite list', async () => {
    await FavoriteRestaurant.deleteResto(123);

    document.querySelector('.liked-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllResto()).toEqual([]);
  });
});
