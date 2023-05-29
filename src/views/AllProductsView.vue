<template>
    <div>
      <Navbar />
    </div>
    <div>
      <AllProductsComponent />
    </div>
    <div>
      <Footer />
    </div>
  </template>
  
  <script>
  
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import AllProductsComponent from '@/components/AllProductsComponent.vue';
  
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      Footer,
      AllProductsComponent
    },
  
  }
  </script>
  