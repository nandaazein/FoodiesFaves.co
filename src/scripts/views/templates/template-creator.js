import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) => {
  const descriptionWords = restaurant.description.split(' ');
  const maxWords = 50;
  const truncatedDescription = descriptionWords.slice(0, maxWords).join(' ');

  const restaurantElement = document.createElement('div');
  restaurantElement.classList.add('restaurant-item');

  const imageUrl = restaurant.pictureId
    ? `${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}`
    : 'placeholder_image_url';

  restaurantElement.innerHTML = `
    <div class="resto-item">
      <div class="resto-item__header">
        <img class="resto-item-image lazyload"  alt="${restaurant.name}"
          src="${imageUrl}">
      </div>
      <div class="resto-item-content">
        <p class="resto-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></p>
        <h5>City : ${restaurant.city}</h5>
        <p class="resto-rating">⭐️ <span>${restaurant.rating}</span></p>
        <p>${truncatedDescription}...</p>
      </div>
    </div>
  `;

  return restaurantElement;
};

export default createRestaurantItem;
