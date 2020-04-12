<template>
   <div class="container pt-10 mx-auto">
      <div
         class="flex justify-center max-w-sm m-6 mx-auto overflow-hidden bg-white bg-blue-500 border rounded-lg shadow-lg"
      >
         <div class="flex font-mono text-4xl text-center text-white">
            <div class="fadeIn">{{ hours }}</div>
            <div class="splitter">:</div>
            <div class="fadeIn">{{ minutes }}</div>
            <div class="splitter">:</div>
            <div class="fadeIn">{{ seconds }}</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Clock',
   data() {
      return {
         hours: '--',
         minutes: '--',
         seconds: '--'
      };
   },
   methods: {
      updateTime() {
         const now = new Date();
         this.hours = this.formatTime(now.getHours());
         this.minutes = this.formatTime(now.getMinutes());
         this.seconds = this.formatTime(now.getSeconds());
      },

      formatTime(numberToFormat) {
         return numberToFormat.toString().padStart(2, '0');
      }
   },

   mounted() {
      setInterval(() => {
         this.updateTime();
      }, 1000);
   }
};
</script>

<style scoped>
.splitter {
   animation: hideShow 1s infinite;
}

.fadeIn {
   animation: fade 0.9s ease-in;
}

@keyframes fade {
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
}

@keyframes hideShow {
   0% {
      opacity: 0;
   }
   25% {
      opacity: 1;
   }
   50% {
      opacity: 1;
   }
   100% {
      opacity: 0;
   }
}
</style>
