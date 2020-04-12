<template>
   <div id="app" class="flex flex-col w-screen h-screen">
      <Header />
      <Clock />
      <Weather />
      <Footer />
   </div>
</template>

<script>
import Clock from './components/Clock';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Weather from '@/components/Weather.vue';
export default {
   name: 'App',
   components: {
      Header,
      Clock,
      Weather,
      Footer
   },
   methods: {
      showGeoReasonAlert() {
         alert(
            'We are tracking Geolocation just to show that the time is according to the place where you are! Just for learning purposes to fetch some API"s'
         );
      }
   },
   mounted() {
      this.showGeoReasonAlert();
   }
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}
</style>
