<template>
    <div>
      <Navbar />
    </div>
    <div>
      <Bucket />
    </div>
    <div>
      <Footer />
    </div>
  </template>
  
  <script>
  
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import Bucket from '@/components/BucketComponent.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
      Bucket
    },
  
  }
  </script>
  