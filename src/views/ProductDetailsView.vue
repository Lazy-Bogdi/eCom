<template>
    <div>
        <Navbar />
    </div>
    <div>
        <ProductDetails />
    </div>
    <div>
        <Footer />
    </div>
</template>
  
<script>


import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ProductDetails from '@/components/ProductDetails.vue';

export default {
    components: {
        ProductDetails,
        Navbar,
        Footer,
    },

}
</script>
  