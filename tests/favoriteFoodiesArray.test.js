import { itActsAsFavoriteFoodiesModel } from './contracts/favoriteFoodiesContract';

let favoriteFood = [];

const FavoriteFoodiesArray = {
  getFoodies(id) {
    if (!id) {
      return;
    }

    return favoriteFood.find((foodies) => foodies.id == id);
  },

  getAllFoodies() {
    return favoriteFood;
  },

  putFoodies(foodies) {
    // eslint-disable-next-line no-prototype-builtins
    if (!foodies.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getFoodies(foodies.id)) {
      return;
    }

    favoriteFood.push(foodies);
  },

  deleteFoodies(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteFood = favoriteFood.filter((foodies) => foodies.id != id);
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteFood = [];
  });

  itActsAsFavoriteFoodiesModel(FavoriteFoodiesArray);
});
