const assert = require('assert');

Feature('Liking Restaurant');

Scenario('showing empty liked restaurant', ({ I }) => {
  const emptyFavoriteRestoText = 'You dont like any restaurant yet';
  // Pengecekan Resto Dihalaman Favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
  I.see(emptyFavoriteRestoText, '.restaurants');
});

Scenario('liking and unliking a restaurant from favorite page', async ({ I }) => {
  const emptyFavoriteRestoText = 'You dont like any restaurant yet';

  // checking the restaurant
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
  I.see(emptyFavoriteRestoText, '.restaurants');

  // Liking Restaurant
  I.amOnPage('/');

  I.seeElement('.resto-item-content a');
  const firstResto = locate('.resto-item-content a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // Unliking Restaurant
  I.seeElement('.restaurants');
  const likedRestoTitle = await I.grabTextFrom('.resto-item-content a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // Melihat detail restoran dari halaman favorit
  I.click(locate('.resto-item-content a').first());

  // Mengklik tombol unlike pada halaman detail restoran
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
  I.see(emptyFavoriteRestoText, '.restaurants');
});

Scenario('Adding customer review', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-item-content');
  I.click(locate('.resto-item-content a').first());

  I.seeElement('.restaurant__info');
  I.fillField({ id: 'name' }, 'win metawin');
  I.fillField({ id: 'review' }, 'bright');
  I.click('.btnsubmit');

  I.see('win metawin', '.restaurant__reviews .review-item');
  I.see('bright', '.restaurant__reviews .review-item');
});
