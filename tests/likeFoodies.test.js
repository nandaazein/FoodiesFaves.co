import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavoriteFoodies from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithFoodies({ id: 1 });

    expect(document.querySelector('[aria-label="like this item"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithFoodies({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithFoodies({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const foodies = await FavoriteFoodies.getFoodies(1);
    expect(foodies).toEqual({ id: 1 });

    await FavoriteFoodies.deleteFoodies(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithFoodies({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteFoodies.putFoodies({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteFoodies.getAllFoodies()).toEqual([{ id: 1 }]);

    await FavoriteFoodies.deleteFoodies(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    // Tidak memberikan ID pada restoran
    await TestFactories.createLikeButtonPresenterWithFoodies({});

    // Simulasikan pengguna menekan tombol suka restoran
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak seharusnya ada restoran yang ditambahkan ke daftar restoran yang disukai
    expect(await FavoriteFoodies.getAllFoodies()).toEqual([]);
  });
});
