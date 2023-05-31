<template>
    <div>
        <h2>Bucket</h2>
        <div v-if="bucket.length === 0">
            <p>Your bucket is empty.</p>
        </div>
        <div v-else class="product-grid">
            <div class="product-card" v-for="product in bucket" :key="product.id">
                <!-- Display product information -->
                <img :src="product.image" :alt="product.title" class="product-image card-img-top">
                <h3 class="product-title">{{ product.title }}</h3>
                <p class="product-price">{{ product.price }}</p>
                <span class="product-quantity">{{ product.quantity }}</span>

                <router-link :to="'/product/' + product.id" class="btn btn-primary">Voir</router-link>
                <button class="btn btn-secondary" @click="increaseQuantity(product.id)">
                    <i class="bi bi-plus"></i>
                </button>
                <button class="btn btn-secondary" @click="decreaseQuantity(product.id)">
                    <i class="bi bi-dash"></i>
                </button>
                <button class="btn btn-primary" @click="removeFromBucket(product.id)">Remove</button>
            </div>
            <div>
                <div class="total-price">
                    Total Price: {{ totalPrice }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 200px 0 0 0
}

.product-card {
    width: calc(20% - 20px);
    /* Adjust the width as needed */
    margin-bottom: 20px;
    /* Add other styling for the product card */
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
  