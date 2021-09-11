<template>
  <v-row>
      <v-col>

        <audio src="../assets/audio/soundtrack.mp3" loop id="soundtrack"></audio>
        
        <div class="d-inline text-center">
           <v-icon :class="lights ? 'volume-btn-dark' : 'volume-btn-light'" class="volume-btn" @click="soundToggle">{{sound === true ? soundon : soundoff}}</v-icon>
        <div v-if="this.$route.path === '/'">
            <v-row id="animated-row" v-if="!sound">
                <v-col>
           <v-icon :class="lights ? 'volume-icon-dark' : 'volume-icon-light'" class="arrow">mdi-arrow-up-thick</v-icon>
           <p :class="lights ? 'volume-text-dark' : 'volume-text-light'" id="click-here">Click here to enable the sound</p>
                </v-col>
            </v-row>
            <v-row v-if="sound">
                <v-col class="fadeOut" id="great-txt">
           <v-icon class="arrow" :class="lights ? 'volume-icon-dark' : 'volume-icon-light'">mdi-check</v-icon>
           <p id="click-here" :class="lights ? 'volume-text-dark' : 'volume-text-light'">Sound activated!</p>
                </v-col>
            </v-row>
        </div>
       
        </div>
      
      </v-col>
      <v-col></v-col>
      <v-col>
          <v-icon id="light-dark-mode" @click="lightsToggle" :style="lights ? 
          'color: #151515; background: rgb(225, 225, 225)' : 
          'color: white; background: #080808; text-shadow: 0px 0px 5px gold;'
          ">{{lights ? darkmode : lightmode}}</v-icon>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
    data() {
        return {
            soundon: 'mdi-volume-high',
            soundoff: 'mdi-volume-low',
            lights_off: true,
            darkmode: 'mdi-moon-waning-crescent',
            lightmode: 'mdi-white-balance-sunny',
        }
    },
    computed: {
        ...mapState(["sound", "lights"])
    },
    methods: {
        ...mapActions(["soundToggle", "lightsToggle"]),
        
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';

.volume-btn-dark {
    color: white;
    text-shadow: 0px 0px 20px aqua;
}

.volume-btn-light {
    color: $lightmode;
    text-shadow: 0px 0px 10px black;
}

.volume-icon-dark {
    background: $gradient1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.volume-icon-light {
background: $lightmode;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.volume-text-dark {
        background: $gradient1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.volume-text-light {
    background: $lightmode;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}



#animated-row{
    animation: move 0.5s ease-in-out infinite alternate-reverse;
    margin-left: 0px;
}

@keyframes move {
    from {margin-top: 0px}
    to {margin-top: 10px}
}

#great-txt {
    margin-left: 10px;
}

.fadeOut {
    animation: fadeOut 1s ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    opacity: 1;
}

@keyframes fadeOut {
    from {opacity: 1}
    to {opacity: 0}
}

#light-dark-mode {
    position: fixed;
    right: 15px;
    top: 5px;
    padding: 10px;
    border-radius: 50%;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
.volume-btn {
    display: none;
}

.arrow {
    display: none;
}

#click-here {
    display: none;
}
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
    .volume-btn {
    display: block;
    font-size: 2em;
    margin-left: 25px;

    &:hover {
     transform: scale(1.3);
     cursor: pointer;
    }
}

.arrow {
     display: block;
    font-size: 2em;
}

#click-here {
     display: block;
    font-family: $style7;
    font-weight: bold;
}
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
    .volume-btn {
    display: block;
    font-size: 2em;
    margin-left: 25px;

    &:hover {
     transform: scale(1.3);
     cursor: pointer;
    }
}

.arrow {
     display: block;
    font-size: 2em;
}

#click-here {
     display: block;
    font-family: $style7;
    font-weight: bold;
}
}

</style>