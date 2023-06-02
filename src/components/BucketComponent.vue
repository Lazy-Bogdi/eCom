<template>
    <div class="bucket-container">
        <h2>Your cart</h2>
        <div v-if="bucket.length === 0">
            <p>Your bucket is empty.</p>
        </div>
        <div v-else>
            <div class="product-grid">
                <div class="product-card" v-for="product in bucket" :key="product.id">
                    <!-- Display product information -->
                    <div class="product-image-container">
                        <img :src="product.image" :alt="product.title" class="product-image">
                    </div>
                    <div class="product-details">
                        <h3 class="product-title">{{ product.title }}</h3>
                        <p class="product-price">{{ product.price }}</p>
                        <div class="quantity-controls">
                            <button class="quantity-btn" @click="decreaseQuantity(product.id)">
                                <i class="bi bi-dash"></i>
                            </button>
                            <span class="product-quantity">{{ product.quantity }}</span>
                            <button class="quantity-btn" @click="increaseQuantity(product.id)">
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                        <button class="remove-btn btn btn-danger" @click="removeFromBucket(product.id)">Remove</button>
                    </div>
                </div>
            </div>
            <div class="total-price">
                Total Price: {{ totalPrice }}
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.bucket-container {
    margin-top: 200px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.product-card {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
}

.product-image-container {
    flex: 0 0 80px;
    margin-right: 20px;
}

.product-image {
    width: 100%;
    height: auto;
}

.product-details {
    flex: 1;
}

.product-title {
    font-size: 18px;
    margin-bottom: 10px;
}

.product-price {
    font-weight: bold;
    margin-bottom: 10px;
}

.quantity-controls {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.quantity-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin: 0 5px;
}

.remove-btn {
    background-color: #dc3545;
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
}

.total-price {
    font-weight: bold;
    margin-top: 20px;
}
</style>
  

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'BucketComponent',
    computed: {
        bucket() {
            // Access the bucket state from the Vuex store
            return this.$store.getters.getBucket;
        },
        totalPrice() {
            // Access the bucket state from the Vuex store
            return this.$store.getters.getTotalPrice;
        },
        ...mapGetters(['getBucket', 'getTotalPrice']),
    },
    methods: {
        ...mapMutations(['increaseQuantity', 'decreaseQuantity', 'removeFromBucket']),
    },
};
</script>
  