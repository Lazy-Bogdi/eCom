<template>
    <div class="contentMain">
        <h2>All Products</h2>
        <div class="sort-container contentBelow">
            <label for="sort-select">Sort by:</label>
            <select id="sort-select" v-model="sortBy" @change="sortProducts">
                <option value=""> Par défaut </option>
                <option value="category">Category</option>
                <option value="priceLowHigh">Price (Low to High)</option>
                <option value="priceHighLow">Price (High to Low)</option>
                <option value="rate">Rate</option>
            </select>
        </div>
        <div>
            <BucketComponent :bucket="bucket" @remove-from-bucket="removeFromBucket" />
        </div>


        <div class="product-grid">
            <div class="product-card" v-for="(product) in displayedProducts" :key="product.id">
                <!-- Display product information -->
                <img :src="product.image" :alt="product.title" class="product-image card-img-top">
                <h3 class="product-title">{{ product.title }}</h3>
                <p class="product-price">{{ product.price }}</p>
                <router-link :to="'/product/' + product.id" class="btn btn-primary">Voir</router-link>
                <button class="btn btn-secondary" @click="addToBucket(product)">+</button>
                <!-- Add to cart button or other actions -->
            </div>
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span>{{ currentPage }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
    </div>
</template>
  
<script>
import articlesData from '@/assets/json/articles.json';
import categoriesData from '@/assets/json/categories.json';
import { mapMutations } from 'vuex';

const PAGE_SIZE = 6; // Number of products per page

export default {
    name: 'AllProductsComponent',
    data() {
        return {
            products: [],
            categories: [],
            sortBy: '', // Stores the selected sort criteria
            currentPage: 1, // Current page number
        };
    },
    computed: {
        sortedProducts() {
            let sorted = [...this.products]; // Create a copy of the products array

            if (this.sortBy === 'category') {
                sorted.sort((a, b) => a.category.localeCompare(b.category)); // Sort by category
            } else if (this.sortBy === 'priceLowHigh') {
                sorted.sort((a, b) => a.price - b.price); // Sort by price (low to high)
            } else if (this.sortBy === 'priceHighLow') {
                sorted.sort((a, b) => b.price - a.price); // Sort by price (high to low)
            } else if (this.sortBy === 'rate') {
                sorted.sort((a, b) => b.rate - a.rate); // Sort by rate
            }

            return sorted;
        },
        totalPages() {
            return Math.ceil(this.sortedProducts.length / PAGE_SIZE); // Calculate total number of pages
        },
        displayedProducts() {
            const startIndex = (this.currentPage - 1) * PAGE_SIZE; // Calculate start index of products for the current page
            const endIndex = startIndex + PAGE_SIZE; // Calculate end index of products for the current page
            return this.sortedProducts.slice(startIndex, endIndex); // Get the products to display for the current page
        },
    },
    methods: {
        sortProducts() {
            // Call the computed property to re-sort the products based on the selected criteria
            this.sortedProducts;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--; // Move to the previous page
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++; // Move to the next page
            }
        },
        ...mapMutations(['addToBucket', 'increaseQuantity', 'decreaseQuantity']),
    },
    mounted() {
        this.products = articlesData.articles;
        this.categories = categoriesData.categories;
    },
};
</script>
  
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 20% 0 20%;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  /* background-color: #fff; */
  background: linear-gradient(-135deg, #ffffff, #7885a1) !important;
  border: 1px solid #ddd;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 15px;
}

.product-title {
  font-size: 16px;
  margin-bottom: 5px;
}

.product-price {
  font-size: 14px;
  margin-bottom: 10px;
}

.btn-primary {
  margin-bottom: 5px;
}

h2 {
    margin-bottom: 20px;
}

.sort-container {
    margin-bottom: 20px;
}

/* .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
} */

/* .pagination button {
    margin: 0 5px;
} */

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 8px 12px;
  border: none;
  background-color: #3d5d98;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination button:hover {
  background-color: #40537b;
}

.pagination button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

</style>
  