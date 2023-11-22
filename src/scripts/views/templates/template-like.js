const createLikeFoodiesButtonTemplate = () => `
  <button aria-label="like this item" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeFoodiesButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton"  class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeFoodiesButtonTemplate,
  createUnlikeFoodiesButtonTemplate,
};
