<template>
  <div>
    <Navbar />
  </div>
  <div>
    <Dashboard />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Dashboard from '@/components/Dashboard.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    Footer,
    Dashboard,
  },

}
</script>
