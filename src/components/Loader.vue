<template>
  <div id="loader-background">
    <v-container>
      <div class="loading loading01">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
      <div class="lds-dual-ring d-block"></div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0,
  }),
  methods: {
    startLoading() {
      document.body.style.overflow = "hidden";
      this.loading = setInterval(this.load, 25);
    },
    load() {
      this.counter < 100 ? this.counter++ : this.doneLoading();
    },
    doneLoading() {
      clearInterval(this.loading);
      document.getElementById(
        "loader-background"
      ).style.transition = "2s";
      document.getElementById("loader-background").style.opacity =
        "0";
      document.getElementById("loader-background").style.zIndex =
        "-10000";
      this.showScrollBar();
    },
    showScrollBar() {
      let loader = document.getElementById("loader-background");

      if (loader.style.opacity === "0") {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
      } else {
        loader.style.opacity = "1";
      }
    },
    showAlert() {
      let sBrowser,
        sUsrAg = navigator.userAgent;
      if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
        alert(
          "Oops. You are using Mozilla Firefox. In order to see this site properly, use a Chrome Based Navigator like Chrome, Microsoft Edge, Chromium, Brave Browser, etc."
        );
      } else {
        return;
      }
    },
  },
  mounted() {
    this.startLoading();
    this.showScrollBar();
    this.showAlert();
    this.load();
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

.loading {
  margin-top: 250px;
  font-size: 1em;
  text-align: center;
  margin-bottom: 50px;
  span {
    margin-left: 20px;
    margin-right: 20px;
  }
}

.loading01 {
  span {
    animation: loading01 1s infinite alternate;
    @for $i from 0 through 9 {
      &:nth-child(#{$i + 1}) {
        animation-delay: #{$i * 0.1}s;
      }
    }
  }
}
@keyframes loading01 {
  0% {
    color: rgb(0, 222, 230);
  }
  100% {
    color: rgb(0, 47, 109);
  }
}

.lds-dual-ring {
  display: inline-block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-color: rgb(0, 222, 230) transparent rgb(0, 47, 109) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#loader-background {
  background: #151515;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 99999;
  opacity: 1;
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #loader {
    font-size: 10em;
    background: linear-gradient(to right, rgb(13, 8, 104), rgb(12, 196, 156));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #loader {
    font-size: 25em;
    background: linear-gradient(to right, rgb(13, 8, 104), rgb(12, 196, 156));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #loader {
    font-size: 40em;
    background: linear-gradient(to right, rgb(13, 8, 104), rgb(12, 196, 156));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}
</style>
