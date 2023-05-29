<template>
    <div>
        <h2>Bucket</h2>
        <div v-if="bucket.length === 0">
            <p>Your bucket is empty.</p>
        </div>
        <div v-else>
            <div class="product-card" v-for="product in bucket" :key="product.id">
                <!-- Display product information -->
                <img :src="product.image" :alt="product.title" class="product-image">
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
        </div>
    </div>
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
    name: 'BucketComponent',
    computed: {
        bucket() {
            // Access the bucket state from the Vuex store
            return this.$store.state.bucket;
        },
    },
    methods: {
        ...mapMutations(['increaseQuantity', 'decreaseQuantity', 'removeFromBucket']),
    },
};
</script>
  