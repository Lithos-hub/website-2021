<template>
<v-container>
  <audio preload="auto" src="../assets/audio/btn2.mp3" id="menufx"></audio>
  <v-row>
    <v-col></v-col>
    <v-col lg="6" cols="12">
      <h1 id="main-title" :class="lights ? 'main-title-dark' : 'main-title-light'">
         Carlos Segura García<br>
         <span id="frontend" :class="lights ? 'main-title-dark' : 'main-title-light'">
           Front-end developer
           </span>
        </h1>
        </v-col>
    <v-col></v-col>
  </v-row>
    <v-row>
      <v-col lg="2" cols="12">
      </v-col>
      <v-col lg="8" cols="12">
          <li v-for="(item, i) in routes" :key="i" class="my-5">
              <router-link :to="item.to">
              <button class="ma-2" id="menu-buttons" :class="lights ? 'menu-btn-dark' : 'menu-btn-light'" @mouseenter="playMenufx">
                <span id="button-text" :class="lights ? 'menu-text-dark' : 'menu-text-light'">
                  {{item.text}}
                </span>
              </button>
              </router-link>
          </li>
      </v-col>
      <v-col lg="2" cols="12"></v-col>
    </v-row>
</v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Header",
  data() {
    return {
      routes: [
        {to: "/cv", text: "Curriculum"},
        {to: "/portfolio", text: "Portfolio"},
        {to: "/contact", text: "Contact"},
        {to: "/about", text: "Me"},
      ]
    }
  },
  computed: {
    ...mapState(["sound", "lights"])
  },
  methods: {
    playMenufx() {
      if(this.sound){
       const menufx = document.getElementById("menufx");
      menufx.volume = 1;
      menufx.play();
      menufx.currentTime = 0;
      }
    },
  }

};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

button:focus {
  outline: 0;
}

* {
  animation: fade 1s ease-in-out;
}

li {
  list-style: none;
}

@keyframes fade{
  from {opacity: 0}
  to {opacity: 1}
}

#frontend {
  font-family: $style5;
  letter-spacing: 0px;
}


#main-container {
  position: relative;
  height: 100%;
}

.main-title-dark {
color: white;
text-shadow: 0px 0px 5px white, 0px 0px 20px $primary;

#frontend{
animation: lightfx 50ms infinite alternate;
  
}

@keyframes lightfx {
  10% {text-shadow: 0px 0px 5px white, 0px 0px 18px $primary;}
  20% {text-shadow: 0px 0px 2px white, 0px 0px 10px $primary;}
  30% {text-shadow: 0px 0px 5px white, 0px 0px 10px $primary;}
  40% {text-shadow: 0px 0px 8px white, 0px 0px 16px $primary;}
  50% {text-shadow: 0px 0px 10px white, 0px 0px 12px $primary;}
  60% {text-shadow: 0px 0px 10px white, 0px 0px 15px $primary;}
  70% {text-shadow: 0px 0px 7px white, 0px 0px 10px $primary;}
  80% {text-shadow: 0px 0px 4px white, 0px 0px 7px $primary;}
  90% {text-shadow: 0px 0px 6px white, 0px 0px 11px $primary;}
}
  
}

.main-title-light {
  color: $lightmode;
  text-shadow: 0px 0px 15px $lightmode;
}

.menu-btn-dark {
  border: solid 1px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, $secondary, $primary);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #151515 inset;

  &:hover {
  #button-text {
  background: linear-gradient(to right, white, $primary);
  text-shadow: 0px 0px 3px cyan;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  }

}

.menu-btn-light{
  border: solid 1px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(35deg, $lightmode, transparent);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px transparent inset;

  &:hover {
  background: transparent;

  #button-text {
  background: linear-gradient(to right, $lightmode, black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  }
  
}

.menu-text-dark {
    background: linear-gradient(to right, $secondary, $primary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.menu-text-light{
    background: linear-gradient(10deg, black, transparent);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}





// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #main-title {
  text-transform: uppercase;
  position: relative;
  font-size: 1em;
  letter-spacing: 5px;
  text-align: center;
  font-family: $style6;

}

#row {
  position: fixed;
  height: 100%;
  width: 100%;
}

#menu-buttons {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

}

#button-text {
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 15px !important;
    font-size: 16px;


}
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #main-title {
  text-transform: uppercase;
  position: relative;
  font-size: 2em;
  letter-spacing: 10px;
  text-align: center;
  font-family: $style6;

}

#menu-buttons {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    padding: 10px;
  }
}

#button-text {
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 15px !important;
    font-size: 15px;
}
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #main-title {
  text-transform: uppercase;
  position: relative;
  font-size: 3em;
  letter-spacing: 10px;
  text-align: center;
  font-family: $style6;
}

#menu-buttons {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    padding: 15px;
  }
}

#button-text {
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 15px !important;
    font-size: 20px;
}
}


</style>