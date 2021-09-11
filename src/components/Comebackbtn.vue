<template>
<div>
  <audio preload="auto" src="../assets/audio/btn1.mp3" id="comebackfx"></audio>
  <router-link to="/" style="text-decoration: none;">
        <button id="button" :class="lights ? 
        'dark-mode-btn' : 'light-mode-btn'" 
        @mouseover="playfx" @mouseleave="stopfx">
          <span id="button-text">Come back</span>
        </button>
    </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Comebackbtn',
  computed: {
    ...mapState(['sound', 'lights']),
  },
  methods: {
    playfx() {
      if (this.sound) {
        const comebackfx = document.getElementById('comebackfx');
        comebackfx.play();
      }
    },
    stopfx() {
      if (this.sound) {
        const comebackfx = document.getElementById('comebackfx');
        comebackfx.pause();
        comebackfx.currentTime = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';

button:focus {
  outline: 0;
}

* {
  font-family: $style6;
  text-transform: uppercase;
}

#button {
  padding: 10px;
  width: 100%;
  border-radius: 10px;

}

.dark-mode-btn {
  transition: 0.5s;
  background: #202020;

  &:hover {
  background: transparent;
  box-shadow: 0px 0px 10px aqua;

  #button-text {
    background: transparent;
    color: cyan;
    background-clip:unset;
    -webkit-background-clip:unset;
    -webkit-text-fill-color:unset;
  }
}

#button-text {
background: $gradient1;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight: bold;
transition: 1s;
}

}

.light-mode-btn {
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(35deg, $lightmode, transparent);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px transparent inset;

  &:hover {
  transition: 1s;
  background: white;
  box-shadow: 0px 0px 10px $background_dark;

  #button-text {
    color: $lightmode;
    }
}

#button-text {
    color: white;
    font-weight: bold;
    transition: 1s;
}

}

</style>
