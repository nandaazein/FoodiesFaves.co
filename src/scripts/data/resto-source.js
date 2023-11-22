import API_ENDPOINT from '../globals/api-endpoint';

// Fungsi untuk mendapatkan daftar restoran
export const getRestaurantsAsync = async () => {
  try {
    const response = await fetch(API_ENDPOINT.LIST);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error(`Error: ${error.message}`);
  }
};

// Fungsi untuk mendapatkan detail restoran berdasarkan ID
export const getRestaurantDetailAsync = async (id) => {
  try {
    const response = await fetch(API_ENDPOINT.DETAIL(id));

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error(`Error: ${error.message}`);
  }
};

// Fungsi untuk menambahkan review customer
export const submitReview = (reviewData) => fetch(API_ENDPOINT.POST_REVIEW, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(reviewData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
