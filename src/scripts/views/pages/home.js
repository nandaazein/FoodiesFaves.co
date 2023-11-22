// Home.js

import { getRestaurantsAsync } from '../../data/resto-source';
import createRestaurantItem from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Find the best restaurant recommendations here</h2>
        <div class="restaurants" id="restaurants"></div>
        <div id="loadingIndicator" class="loading-indicator">Loading Pages....</div>
        <div id="errorContainer" class="error-container"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingIndicator = document.querySelector('#loadingIndicator');
    const errorContainer = document.querySelector('#errorContainer');

    loadingIndicator.style.display = 'block';

    try {
      const { restaurants } = await getRestaurantsAsync();

      if (restaurants && restaurants.length > 0) {
        loadingIndicator.style.display = 'none';
        restaurants.forEach((restaurant) => {
          const restaurantElement = createRestaurantItem(restaurant);

          // Periksa apakah restaurantElement adalah objek HTMLElement
          if (restaurantElement instanceof HTMLElement) {
            restaurantsContainer.appendChild(restaurantElement);
          } else {
            console.error('Invalid restaurant element:', restaurantElement);
            console.log('Type of restaurantElement:', typeof restaurantElement);
            console.log('String representation of restaurantElement:', restaurantElement.toString());
          }
        });
      } else {
        loadingIndicator.style.display = 'none';
        errorContainer.innerHTML = 'Error fetching data';
        console.error('Invalid data structure:', restaurants);
      }
    } catch (error) {
      loadingIndicator.style.display = 'none';
      errorContainer.innerHTML = 'Error fetching data';
      console.error(error);
    }
  },
};

export default Home;
