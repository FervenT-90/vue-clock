<template>
   <div class="flex-1 mx-0 my-0 align-bottom">
      <svg
         class="wave3"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1440 320"
      >
         <path
            fill="#0070ff"
            fill-opacity="1"
            d="M0,96L40,112C80,128,160,160,240,192C320,224,400,256,480,245.3C560,235,640,181,720,165.3C800,149,880,171,960,160C1040,149,1120,107,1200,85.3C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
         ></path>
      </svg>
      <svg
         class="wave2"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1440 320"
      >
         <path
            fill="#0080ff"
            fill-opacity="1"
            d="M0,320L40,288C80,256,160,192,240,186.7C320,181,400,235,480,229.3C560,224,640,160,720,128C800,96,880,96,960,128C1040,160,1120,224,1200,256C1280,288,1360,288,1400,288L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
         ></path>
      </svg>
      <svg
         class="wave1"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1440 320"
      >
         <path
            fill="#0098ff"
            fill-opacity="1"
            d="M0,128L40,106.7C80,85,160,43,240,58.7C320,75,400,149,480,176C560,203,640,181,720,165.3C800,149,880,139,960,122.7C1040,107,1120,85,1200,74.7C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
         ></path>
      </svg>
   </div>
</template>

<script>
export default {
   name: 'Footer'
};
</script>

<style scoped>
.wave1 {
   bottom: 0%;
   position: absolute;
   animation: linear infinite alternate;
   animation-name: wave1;
   animation-duration: 5s;
}
.wave2 {
   bottom: 0%;
   position: absolute;
   animation: linear infinite alternate;
   animation-name: wave2;
   animation-duration: 2s;
}

.wave3 {
   bottom: 0%;
   position: absolute;
   animation: linear infinite alternate;
   animation-name: wave3;
   animation-duration: 4s;
}

@keyframes wave1 {
   0% {
      bottom: 0;
   }
   100% {
      bottom: 0%;
   }
}

@keyframes wave2 {
   0% {
      bottom: 4%;
   }
   50% {
      bottom: 2%;
   }
   100% {
      bottom: 0%;
   }
}

@keyframes wave3 {
   0% {
      bottom: 4%;
   }
   50% {
      bottom: 7%;
   }
   100% {
      bottom: 10%;
   }
}
</style>
