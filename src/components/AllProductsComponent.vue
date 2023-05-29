<template>
    <div>
        <h2>All Products</h2>
        <div class="product-grid">
            <div class="product-card" v-for="product in products" :key="product.id">
                <!-- Display product information -->
                <img :src="product.image" :alt="product.title" class="product-image">
                <h3 class="product-title">{{ product.title }}</h3>
                <p class="product-price">{{ product.price }}</p>
                <router-link :to="'/product/' + product.id" class="btn btn-primary">Voir</router-link>
                <a href="#" class="btn btn-secondary">+</a>
                <!-- Add to cart button or other actions -->
            </div>
        </div>
    </div>
</template>
  
<script>
import articlesData from '@/assets/json/articles.json';

export default {
    data() {
        return {
            products: []
        };
    },
    mounted() {
        this.products = articlesData.articles;
    }
};
</script>
  
<style scoped>
/* Add your custom styles here */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
}

.product-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media screen and (max-width: 480px) {
    .product-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}
</style>
  