import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteFoodies from '../../src/scripts/data/favorite-resto';


const createLikeButtonPresenterWithFoodies = async (foodies) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteFood: FavoriteFoodies,
    foodies,
  });
};
export { createLikeButtonPresenterWithFoodies };
