const assert = require('assert');

Feature('Liking and unliking restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking then unliking a restaurant', async ({ I }) => {
  // go to favorite, and see there is no favorite resto yet
  I.see('No resto add to favorite yet, please add some!', '.error-element');

  // go to home page and lets clicked the first resto and get into detail page
  I.amOnPage('/');
  await I.waitForElement('.name_resto', 1000);

  I.seeElement('.name_resto a');
  const firstResto = locate('.name_resto a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  // in detail page, click a button to like the resto
  await I.waitForElement('.like-button');
  I.seeElement('.like-button');
  I.click(locate('.like-button'));

  // now, go to the favorite page and you will see one restaurant is there
  I.amOnPage('/#/favorite');
  I.seeElement('item-resto');
  const likedRestoName = await I.grabTextFrom('.name_resto a');

  // verifiy if that's the resto you just liked
  assert.strictEqual(firstRestoName, likedRestoName);

  // now, lets try to unlike the resto, go back to detail page by clicking the resto name
  await I.waitForElement('.name_resto', 1000);
  I.seeElement('.name_resto');
  I.click(locate('.name_resto a').first());

  // once you got into detail page, you will see the button is filled,
  // mean now you can dislike the resto
  await I.waitForElement('.liked-button');
  I.seeElement('.liked-button');
  I.click(locate('.liked-button'));

  // last, go back to favorite page and voila, the resto successfully disliked
  I.amOnPage('/#/favorite');
  I.see('No resto add to favorite yet, please add some!', '.error-element');
});
