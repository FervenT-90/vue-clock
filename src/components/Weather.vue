<template>
   <div id="weatherContainer" v-if="located">
      <div class="flex justify-center font-bold">
         <img :src="weatherIcon" alt="weather" />
      </div>
      <div class="font-bold">{{ location }}</div>
      <div class="font-bold">{{ weatherCondition }}</div>
      <div class="font-bold">{{ temperature + ' ºC' }}</div>
   </div>
</template>

<script>
import { getLocationAndWeatherStatsBy } from '../services/locationWeatherApiService';
export default {
   name: 'Weather',
   data() {
      return {
         location: '--',
         located: false,
         weatherCondition: '--',
         weatherIcon: '--',
         temperature: '--',
         latitude: 0,
         longitude: 0
      };
   },
   methods: {
      getCurrentPositionAsync() {
         return new Promise((resolve, reject) => {
            this.location = 'Locating...';
            navigator.geolocation.getCurrentPosition(
               position => {
                  resolve({
                     latitude: position.coords.latitude,
                     longitude: position.coords.longitude
                  });
               },
               err => reject(err)
            );
         });
      },
      setLocationFromNavigator(position) {
         this.latitude = position.latitude;
         this.longitude = position.longitude;
      },

      async getLocationAndWeatherStatsFromApi() {
         this.location = 'Getting location and weather stats...';
         const locationAndStats = await getLocationAndWeatherStatsBy(
            this.latitude,
            this.longitude
         );
         return locationAndStats;
      },

      async setLocationAndWeatherStats(locationAndWeatherStats) {
         this.location = locationAndWeatherStats.location;
         this.weatherCondition = locationAndWeatherStats.weatherCondition;
         this.weatherIcon = locationAndWeatherStats.weatherIcon;
         this.temperature = locationAndWeatherStats.temperature;
         this.located = true;
      }
   },
   async mounted() {
      const currentPosition = await this.getCurrentPositionAsync();
      this.setLocationFromNavigator(currentPosition);
      const locationAndWeatherStats = await this.getLocationAndWeatherStatsFromApi();
      this.setLocationAndWeatherStats(locationAndWeatherStats);
   }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bellota+Text&display=swap');

#weatherContainer {
   font-family: 'Bellota Text', cursive;
   animation: fade 0.5s ease-in;
}

@keyframes fade {
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
}
</style>
