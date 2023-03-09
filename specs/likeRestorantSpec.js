import '../src/scripts/components/likerfeature';
import FavoriteRestaurant from '../src/scripts/data/favorite-resto-idb';

describe('Like the restaurant', () => {
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

  it('should show the like button if restorant has not been liked before', async () => {
    await addButtonLikeContainer(resto);
    expect(document.querySelector('.like-button')).toBeTruthy();
  });

  it('should not show the unlike button if restorant has not been liked before', async () => {
    await addButtonLikeContainer(resto);
    expect(document.querySelector('.liked-button')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await addButtonLikeContainer(resto);
    document.querySelector('.like-button').dispatchEvent(new Event('click'));
    // document.querySelector('.like-button').click();

    const restaurant = await FavoriteRestaurant.getResto(123);

    expect(restaurant).toEqual({
      id: 123,
      name: 'Resto Name',
      city: 'City',
      description: 'Resto description',
      pictureId: '12345',
      rating: 4.5,
    });
    FavoriteRestaurant.deleteResto(123);
  });

  it('should not add favorite restaurant when its already there', async () => {
    await addButtonLikeContainer(resto);
    await FavoriteRestaurant.putResto(resto);

    document.querySelector('.like-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllResto()).toEqual([{
      id: 123,
      name: 'Resto Name',
      city: 'City',
      description: 'Resto description',
      pictureId: '12345',
      rating: 4.5,
    }]);

    FavoriteRestaurant.deleteResto(123);
  });

  it('should not add favorite restaurant when it has no id', async () => {
    await addButtonLikeContainer({});

    document.querySelector('.like-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllResto()).toEqual([]);
  });
});
