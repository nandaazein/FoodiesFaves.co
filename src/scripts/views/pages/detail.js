import UrlParser from '../../routes/url-parser';
import { getRestaurantDetailAsync, submitReview } from '../../data/resto-source';
import createRestaurantDetailTemplate from '../templates/template-detail';
import { createLikeFoodiesButtonTemplate } from '../templates/template-like';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteFoodies from '../../data/favorite-resto';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="resto-item-detail">
        <div class="restaurants" id="restaurants"></div>
        <div id="reviewFormContainer" class="restaurant-detail">
          <h2 class="restaurant__name">Add Your Review</h2>
          <form class="restaurant__info" id="reviewForm">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>
            <label for="review">Your Review</label>
            <textarea id="review" name="review" required></textarea>
            <button type="submit" class="btnsubmit">Submit Review</button>
          </form>
        </div>
        <ul class="restaurant__reviews" id="restaurantReviews"></ul>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async submitReviewHandler(url) {
    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');

    const name = nameInput.value;
    const review = reviewInput.value;

    try {
      const response = await submitReview({
        id: url.id,
        name,
        review,
      });

      if (response.error === false) {
        this.displaySubmittedReview(name, review);
        this.clearFormInputs(nameInput, reviewInput);

        console.log('Review submitted successfully');
      } else {
        console.error('Error submitting review:', response.message);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  },

  displaySubmittedReview(name, review) {
    const reviewsContainer = document.querySelector('.restaurant__reviews');

    const reviewElement = document.createElement('li');
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    reviewElement.className = 'review-item';
    reviewElement.innerHTML = `
      <span>${name}</span>${review}
      <span class="review-date">${new Date().toLocaleDateString('id-ID', dateOptions)}</span>
    `;

    const existingReviews = reviewsContainer.querySelectorAll('.review-item');
    const isReviewExist = Array.from(existingReviews).some((existingReview) => {
      const existingName = existingReview.querySelector('span')?.textContent;
      const existingReviewText = existingReview.childNodes[1]?.nodeValue?.trim() || '';
      return existingName === name && existingReviewText === review;
    });

    if (!isReviewExist) {
      reviewsContainer.appendChild(reviewElement);
    }
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await getRestaurantDetailAsync(url.id);

      const restaurantContainer = document.querySelector('#restaurants');
      const likeButtonContainer = document.querySelector('#likeButtonContainer');
      const reviewForm = document.querySelector('#reviewForm');

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
      likeButtonContainer.innerHTML = createLikeFoodiesButtonTemplate();

      LikeButtonPresenter.init({
        likeButtonContainer,
        favoriteFood: FavoriteFoodies,
        foodies: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          description: restaurant.restaurant.description,
          pictureId: restaurant.restaurant.pictureId,
          address: restaurant.restaurant.address,
          city: restaurant.restaurant.city,
          rating: restaurant.restaurant.rating,
        },
      });

      reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        this.submitReviewHandler(url);
      });
    } catch (error) {
      const loadingIndicator = document.querySelector('#loadingIndicator');
      const errorContainer = document.querySelector('#errorContainer');
      loadingIndicator.style.display = 'none';
      errorContainer.innerHTML = 'Error fetching restaurant details';
      console.error(error);
    }
  },
};

export default Detail;
