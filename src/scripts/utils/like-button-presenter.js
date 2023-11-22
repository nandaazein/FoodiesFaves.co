import { createLikeFoodiesButtonTemplate, createUnlikeFoodiesButtonTemplate } from '../views/templates/template-like';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteFood, foodies }) {
    this._likeButtonContainer = likeButtonContainer;
    this.foodies = foodies;
    this._favoriteFoodies = favoriteFood;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this.foodies;

    if (await this._isFoodiesExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isFoodiesExist(id) {
    const foodies = await this._favoriteFoodies.getFoodies(id);
    return !!foodies;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeFoodiesButtonTemplate(this.foodies.id);

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await this._favoriteFoodies.putFoodies(this.foodies);
        this._renderButton();
      });
    }
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeFoodiesButtonTemplate(this.foodies.id);

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await this._favoriteFoodies.deleteFoodies(this.foodies.id);
        this._renderButton();
      });
    }
  },
};

export default LikeButtonPresenter;
