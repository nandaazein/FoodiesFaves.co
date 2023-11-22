import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="resto-detail">
    <h1>Restaurant Information</h1>
    <img class="resto-poster" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="resto-info">
      <h2>${restaurant.name}</h2>
      <div class="detail-section">
        <h3>Address</h3>
        <p>${restaurant.address}</p>
      </div>
      <div class="detail-section">
        <h3>City</h3>
        <p>${restaurant.city}</p>
      </div>
      <div class="detail-section">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
      </div>
      <div class="detail-section">
        <h3>Rating</h3>
        <p>${restaurant.rating}</p>
      </div>
      <div class="detail-section">
        <h3>Food Menu</h3>
        <p>${restaurant.menus.foods.map((foods) => foods.name).join(', ')}</p>
      </div>
      <div class="detail-section">
        <h3>Drink Menu</h3>
        <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
      <div class="detail-section">
        <h3>Customer Review</h3>
        <div class="restaurant__reviews">
          ${restaurant.customerReviews.map((review) => `
            <li>
              <span>${review.name}</span>${review.review}
              <span class="review-date">${(review.date)}</span>
            </li>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
`;

export default createRestaurantDetailTemplate;
