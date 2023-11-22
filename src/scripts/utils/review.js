// RestaurantForm.js
import submitReviewToServer from '../data/resto-source';

const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('#name');
  const reviewInput = document.querySelector('#review');

  const name = nameInput.value;
  const review = reviewInput.value;

  try {
    const success = await submitReviewToServer({ name, review });

    if (success) {
      // Jika berhasil, tambahkan elemen review ke halaman
      const reviewElement = document.createElement('div');
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      reviewElement.className = 'review-item';
      reviewElement.innerHTML = `
        <p><strong>${name}</strong></p>
        <p>${review}</p>
        <p>${new Date().toLocaleDateString('id-ID', dateOptions)}</p>
      `;

      const reviewsContainer = document.querySelector('.restaurant__reviews');
      reviewsContainer.appendChild(reviewElement);

      // Bersihkan nilai input setelah submit
      nameInput.value = '';
      reviewInput.value = '';

      console.log('Review submitted successfully');
    } else {
      console.error('Error submitting review');
      // Handle errors if needed
    }
  } catch (error) {
    console.error('Error submitting review:', error);
    // Handle errors if needed
  }
});

// // Fungsi untuk membersihkan nilai input pada elemen tertentu
// function clearInputFields(...selectors) {
//   selectors.forEach((selector) => (document.querySelector(selector).value = ''));
// }
