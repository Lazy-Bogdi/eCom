<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1 class="hero-title">Welcome to Lazy Case</h1>
                <p class="hero-subtitle">Discover stylish and protective cases for your devices</p>
                <router-link :to="'/all-products'" class="btn btn-primary">Shop Now</router-link>

                <!-- Swiper container -->
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <!-- Swiper slides -->
                        <div class="swiper-slide" v-for="article in bestArticles" :key="article.title">
                            <div class="article-card">
                                <img :src="article.image" :alt="article.title" class="article-image">
                                <h3 class="article-title">{{ article.title }}</h3>
                                <p class="article-rating">{{ article.rating }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> -->
                </div>
            </div>
        </section>

        <!-- New Products Section -->
        <section class="featured-products">
            <div class="container">
                <h2 class="section-title">New Arrivals</h2>
                <div class="product-grid">
                    <!-- Featured Product Cards -->
                    <div class="product-card" v-for="article in recentArticles" :key="article.title">
                        <img :src="article.image" :alt="article.title" class="product-image">
                        <h3 class="product-title">{{ article.title }}</h3>
                        <p class="product-price">{{ article.price }}</p>
                        <router-link :to="'/product/' + article.id" class="btn btn-primary">Voir</router-link>
                        <button class="btn btn-secondary" @click="addToBucket(article)">+</button>
                    </div>
                    <!-- Add more product cards here -->
                </div>
            </div>
        </section>


        <!-- Testimonials Section -->
        <section class="testimonials">
            <div class="container">
                <h2 class="section-title">Testimonials</h2>
                <div class="testimonial-grid">
                    <!-- Testimonial Cards -->
                    <div class="testimonial-card">
                        <img src="path/to/user-avatar.jpg" alt="User Avatar">
                        <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p class="testimonial-author">John Doe</p>
                    </div>
                    <!-- Add more testimonial cards here -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import articlesData from '@/assets/json/articles.json';
import { mapMutations } from 'vuex';

export default {
    name: 'Dashboard',
    data() {
        return {
            bestArticles: [],
            recentArticles: [],
            allArticles: []
        };
    },
    mounted() {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000, // Delay in milliseconds (e.g., 3000 = 3 seconds)
                enabled: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Add any other Swiper configurations you need
        });
        this.bestArticles = articlesData.articles
            .sort((a, b) => b.rate - a.rate)
            .slice(0, 3);
        this.allArticles = articlesData.articles
        this.recentArticles = this.getRecentArticles();
    },
    methods: {
        getRecentArticles() {
            return [...this.allArticles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
        },
        ...mapMutations(['addToBucket']),
    }
};
</script>
  
<style>
/* Add your custom CSS styles here */
.swiper-container {
    overflow: hidden;
}

.product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product-card {
    width: calc(20% - 20px);
    /* Adjust the width as needed */
    margin-bottom: 20px;
    /* Add other styling for the product card */
}

/* Add media queries for responsiveness */
@media screen and (max-width: 768px) {
    .product-card {
        width: calc(33.33% - 20px);
    }
}

@media screen and (max-width: 480px) {
    .product-card {
        width: calc(50% - 20px);
    }
}
</style>
  