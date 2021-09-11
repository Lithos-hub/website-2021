<template>
<div :style="lights ? 'background: #151515; transition: 1s ease-in-out;' : 'background: white; transition: 1s ease-in-out;'" class="app">
    <!-- Noise Background -->
    <img id="background-noise" src="./assets/img/noise.png" :style="lights ? 'opacity: 1' : 'opacity: 0.5'">

    <!-- Loader -->
    <Loader />
    <VolumeBar id="volumebar" />
    <!-- Views -->
    <router-view></router-view>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import VolumeBar from "./components/VolumeBar";

import {mapState} from "vuex";

export default {
  name: "App",
  components: {
    Footer,
    Loader,
    VolumeBar
  },
  computed: {
      ...mapState(["lights"])
  }, 
};
</script>

<style lang="scss">
@import "src/scss/variables";

#volumebar {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
}

#background-noise {
  z-index: -1;
  position: fixed;
  animation: noise 100ms linear infinite alternate-reverse;
  mix-blend-mode:hard-light;

}

@keyframes noise {
  from {margin-top: -1000px}
  to {margin-top: 0px;}

}

.app {
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
}

html,
body {
  color: $primary !important;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}

.fadeIn {
  animation: fadeIn 1s linear;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


/* ***************************** SCROLL BAR ***************************** */

/* width */
::-webkit-scrollbar {
  display: none;
}
</style>
