<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="hero contentBelow">
            <div class="container">
                <h1 class="hero-title">Welcome to Lazy Case</h1>
                <p class="hero-subtitle">Discover stylish and protective cases for your devices</p>

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
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <router-link :to="'/all-products'" class="btn btn-primary" id="shopwNow">Shop Now</router-link>
            </div>
        </section>

        <!-- New Products Section -->
        <section class="featured-products">
            <div class="container contentMain">
                <h2 class="section-title">New Arrivals</h2>
                <div class="product-grid">
                    <!-- Featured Product Cards -->
                    <div class="product-card" v-for="article in recentArticles" :key="article.title">
                        <img :src="article.image" :alt="article.title" class="product-image card-img-top">
                        <h3 class="product-title">{{ article.title }}</h3>
                        <p class="product-price">{{ article.price }} $</p>
                        <router-link :to="'/product/' + article.id" class="btn btn-primary">Voir</router-link>
                        <!--<button class="btn btn-secondary" @click="addToBucket(article)">+</button>-->
                    </div>
                    <!-- Add more product cards here -->
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
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
            speed: 1000,
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
  
<style scoped>
/* Add your custom CSS styles here */
.home {
  padding: 40px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.swiper-container {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.article-card {
  width: 900px;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
}

.article-card img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.article-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-rating {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.featured-products {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  text-align: center;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  margin-right: 10px;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
  border: none;
  margin-right: 10px;
}

/* Add media queries for responsiveness */
@media screen and (max-width: 768px) {
  .product-card {
    width: calc(50% - 20px);
  }
}

@media screen and (max-width: 480px) {
  .product-card {
    width: 100%;
  }
}
</style>

  