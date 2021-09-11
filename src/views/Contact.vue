<template>
 <v-container fluid class="fadeIn">
      <SectionTitle :sectionTitle="title" />

 <audio preload="auto" src="../assets/audio/btn6.mp3" id="contactfx"></audio>

      <v-row class="centered">
          
          <v-col lg="3" class="text-center">
              <a href="mailto:lithos.contact@gmail.com">
                  <v-icon :class="lights ? 'dark-mode' : 'light-mode'" class="contact-icons" @mouseenter="playfx">mdi-email</v-icon>
              </a>
          </v-col>
          <v-col lg="3" class="text-center">
               <a href="https://www.linkedin.com/in/carlos-segura-garcia">
              <v-icon :class="lights ? 'dark-mode' : 'light-mode'" class="contact-icons" @mouseenter="playfx">mdi-linkedin</v-icon>
                </a>
          </v-col>
          <v-col lg="3" class="text-center">
               <a href="https://github.com/Lithos-hub">
               <v-icon :class="lights ? 'dark-mode' : 'light-mode'" class="contact-icons" @mouseenter="playfx">mdi-github</v-icon>
                </a>
               </v-col>
          <v-col lg="3" class="text-center">
               <a href="https://stackoverflow.com/cv/carlos-segura">
               <v-icon :class="lights ? 'dark-mode' : 'light-mode'" class="contact-icons" @mouseenter="playfx">mdi-stack-overflow</v-icon>
                </a>
               
               </v-col>

        <v-row class="fadeIn mt-5">
        <v-col></v-col>
        <v-col lg="4" cols="12">
            <Comebackbtn />
            </v-col>
        <v-col></v-col>
        </v-row>
      </v-row>

 </v-container>
</template>

<script>
import Comebackbtn from "../components/Comebackbtn";
import SectionTitle from "../components/SectionTitle";

import {mapState} from "vuex";

export default {
  data() {
    return {
      title: "Contact"
    }
  },
    components: {
        Comebackbtn,
        SectionTitle
    },
    computed: {
      ...mapState(["sound", "lights"])
    },
    methods: {
      playfx() {
      if(this.sound){
      const contactfx = document.getElementById("contactfx");
      contactfx.volume = 1;
      contactfx.play();
      contactfx.currentTime = 0;
    }
   },
    }

}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';

.fadeIn {
  animation: fade 1s ease-in-out;
   font-family: $style6;
}

@keyframes fade{
  from {opacity: 0}
  to {opacity: 1}
}


a {
    text-decoration: none;
}

.centered {
    position: absolute;
    top: 25%;
    width: 100%;
    justify-content: center;
}

.contact-icons:hover {
  transform: scale(1.2);
  border-radius: 15%;
  cursor: pointer;
}


// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: $h1_mobile;
  font-family: $style6 !important;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.contact-icons {
  font-size: 3em !important;

}
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: 25px;
  font-family: $style6 !important;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.contact-icons {
  font-size: 5em !important;

}
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: 25px;
  font-family: $style6 !important;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.contact-icons {
  font-size: 10em !important;

}
}


.dark-mode {
  background: $gradient1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {

  box-shadow: 0px 0px 10px aqua;
  transform: scale(1.2);
  border-radius: 15%;
  cursor: pointer;
  
}
}

.light-mode {
  background: $lightmode;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {

  box-shadow: 0px 0px 10px black;
  transform: scale(1.2);
  cursor: pointer;
  
}
}


</style>