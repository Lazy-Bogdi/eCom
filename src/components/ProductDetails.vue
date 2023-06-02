<template>
    <div class="product-details contentBelow">
        <div v-if="product" class="product-container">
            <div class="product-image-container">
                <img :src="product.image" :alt="product.title" class="product-image">
            </div>
            <div class="product-info">
                <h2>{{ product.title }}</h2>
                <p>Category: {{ product.category }}</p>
                <p>Price: {{ product.price }}</p>
                <p>Rating: {{ displayRating }}</p>
                <button class="btn btn-primary" @click="addToBucket(product)">Add to Cart</button>
            </div>
        </div>
        <div class="product-description" v-if="product">
            <h3>Description:</h3>
            <p>{{ product.description }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>  
  
<script>
import articlesData from '@/assets/json/articles.json';
import { mapMutations } from 'vuex';

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
        },
        ...mapMutations(['addToBucket'])
    },
    computed: {
        displayRating() {
            if (this.product) {
                const rating = this.product.rate;
                const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
                const fullStars = Math.floor(roundedRating);
                const halfStar = roundedRating % 1 !== 0;
                const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

                let ratingDisplay = '';

                for (let i = 0; i < fullStars; i++) {
                    ratingDisplay += '★'; // Full star
                }

                if (halfStar) {
                    ratingDisplay += '½'; // Half star
                }

                for (let i = 0; i < emptyStars; i++) {
                    ratingDisplay += '☆'; // Empty star
                }

                return ratingDisplay;
            }

            return '';
        }
    },
};
</script>
  
<!-- <style scoped>
.product-details {
    display: flex;
    align-items: center;
    /* margin: 0 0 200px 0; */
}

.product-container {
    display: flex;
    align-items: center;
}

.product-image-container {
    margin: 0 20px 0 0
}

.product-image-container img {
    /* height: 500px;
    width: 500px; */
    width: calc(50% - 10px);
}

.product-info {
    flex: calc(50%);
}

.rating {
    color: gold;
    font-size: 24px;
}

.star {
    display: inline-block;
}

.contentBelow {
    padding-top: 20% !important;
}
</style> -->
  
  
  
<style scoped>
.product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
}

.product-container {
    display: flex;
    align-items: center;
}

.product-image-container {
    margin-right: 20px;
}

.product-image {
    width: 200px;
}

.product-info {
    flex: 1;
}

.product-description {
    margin-top: 70px;
}

.product-description h3 {
    margin-bottom: 10px;
}
</style>
  