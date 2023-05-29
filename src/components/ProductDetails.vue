<template>
    <div>
        <h2>Product Details</h2>
        <div v-if="product">
            <img :src="product.image" :alt="product.title" class="product-image">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <!-- Add other product details as needed -->
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>
  
<script>
import articlesData from '@/assets/json/articles.json';

export default {
    data() {
        return {
            product: null
        };
    },
    mounted() {
        const productId = this.$route.params.id; 
        this.getProductDetails(productId);
    },
    methods: {
        getProductDetails(productId) {

            setTimeout(() => {
                const product = articlesData.articles.find((item) => item.id === parseInt(productId));
                this.product = product;
            }, 500);
        }
    }
};
</script>
  
<style scoped>
/* Add your custom styles here */
</style>
  