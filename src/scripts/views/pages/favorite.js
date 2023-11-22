import FavoriteFoodies from '../../data/favorite-resto';
import createRestaurantItem from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <div class="restaurants" id="restaurant"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteFoodies.getAllFoodies();
    const restaurantsContainer = document.querySelector('#restaurant');
    const emptyFavoriteRestoText = 'You dont like any restaurant yet';

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `<h1>${emptyFavoriteRestoText}</h1>`;
    } else {
      restaurants.forEach((restaurant) => {
        const restaurantItem = createRestaurantItem(restaurant);
        restaurantsContainer.appendChild(restaurantItem);
      });
    }
  },
};

export default Like;
