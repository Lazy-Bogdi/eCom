<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            <!-- Brand Title -->
            <router-link to="/" class="navbar-brand">Lazy Case</router-link>
            <!-- Search Icon -->
            <span class="navbar-brand">
                <i class="bi bi-search"></i>
            </span>

            <!-- Burger Menu -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>



            <!-- Profile Icon -->
            <span class="navbar-brand">
                <i class="bi bi-person"></i>
            </span>

            <!-- Bucket with Item Count -->
            <router-link to="/bucket" class="navbar-brand">
                <i class="bi bi-bag"></i>
                <span class="badge bg-primary">{{ bucketItemCount }}</span>
            </router-link>

            <!-- Collapsible Menu Items 
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li>fesffesf</li>
                    <li>fesffesf</li>
                    <li>fesffesf</li>
                    <li>fesffesf</li>
                    <li>fesffesf</li>
                    <li>fesffesf</li>
                    <li>fesffesf</li>
                    <li>fesffesf</li>

                </ul>
            </div>-->
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Navbar',
    computed: {
        ...mapState({
            bucketItemCount: (state) => state.bucket.reduce((total, item) => total + item.quantity, 0),
        }),
    },
};
</script>
<style>
.navbar {
    height: 120px;
    margin: 0 0 100px 0;
    background-color: rgb(69, 72, 93);
}

.contentBelow {
    padding: 150px 0 0 0
}
</style>
