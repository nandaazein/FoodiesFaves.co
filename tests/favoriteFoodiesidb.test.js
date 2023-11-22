import { itActsAsFavoriteFoodiesModel } from './contracts/favoriteFoodiesContract';
import FavoriteFoodies from '../src/scripts/data/favorite-resto';

describe('Favorite Foodies Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteFoodies.getAllFoodies()).forEach(async (foodies) => {
      await FavoriteFoodies.deleteFoodies(foodies.id);
    });
  });

  itActsAsFavoriteFoodiesModel(FavoriteFoodies);
});
