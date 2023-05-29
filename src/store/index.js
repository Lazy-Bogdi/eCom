import { createStore } from 'vuex';

export default createStore({
  state: {
    bucket: [], // Array to store the bucket items
  },
  getters: {
    getBucket: (state) => state.bucket,
    getTotalPrice: (state) =>
      state.bucket.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      ),
  },
  mutations: {
    addToBucket(state, product) {
      const existingProduct = state.bucket.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++; // Increment quantity if the product already exists in the bucket
      } else {
        state.bucket.push({ ...product, quantity: 1 }); // Add the product to the bucket with quantity 1
      }
    },
    removeFromBucket(state, productId) {
      state.bucket = state.bucket.filter((item) => item.id !== productId); // Remove the product from the bucket
    },
    increaseQuantity(state, productId) {
      const product = state.bucket.find((item) => item.id === productId);
      if (product) {
        product.quantity++; // Increment the quantity of the product
      }
    },
    decreaseQuantity(state, productId) {
      const product = state.bucket.find((item) => item.id === productId);
      if (product) {
        product.quantity--; // Decrease the quantity of the product
        if (product.quantity <= 0) {
          state.bucket = state.bucket.filter((item) => item.id !== productId); // Remove the product from the bucket if quantity becomes zero or less
        }
      }
    },
  },
});
