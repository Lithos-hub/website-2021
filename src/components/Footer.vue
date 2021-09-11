<template>
  <v-footer id="footer" :style="lights ? 'background: transparent' : 'background: white'">
    <v-row class="text-center">
        <v-col class="ma-auto d-flex" lg="2" cols="12">
          <div class="mx-auto">
          <a
            href="https://www.linkedin.com/in/carlos-segura-garcia"
            style="text-decoration: none"
          >
            <div id="linkedin-btn" class="mx-2 d-inline">
              <v-icon size="24px" :class="lights ? 'dark-mode-icons' : 'light-mode-icons'">mdi-linkedin</v-icon>
            </div>
          </a>
          <a href="https://github.com/Lithos-hub" style="text-decoration: none">
            <div id="git-btn" class="mx-2 d-inline">
              <v-icon size="24px" :class="lights ? 'dark-mode-icons' : 'light-mode-icons'">mdi-github</v-icon>
            </div>
          </a>
          <a href="https://stackoverflow.com/cv/carlos-segura" style="text-decoration: none">
            <div id="stack-btn" class="mx-2 d-inline">
              <v-icon size="24px" :class="lights ? 'dark-mode-icons' : 'light-mode-icons'">mdi-stack-overflow</v-icon>
            </div>
          </a>
          </div>
        </v-col>
        

<v-col lg="8" cols="6" class="ma-auto" id="date-name">
          <div :class="lights ? 'dark-mode-datename' : 'light-mode-datename'">
          {{ new Date().getFullYear() }} — <strong class="gradient-name">Carlos Segura García</strong>
          </div>
    
</v-col>
<v-col lg="2" cols="6" class="ma-auto" id="made-with" :class="lights ? 'dark-mode-madewith' : 'light-mode-madewith'">
            Made with <v-icon id="heart">mdi-heart</v-icon> and
            <v-icon id="vuejs">mdi-vuejs</v-icon>
</v-col>

    </v-row>
  </v-footer>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {
    ...mapState(["lights"])
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#date-name {
  color: white;
  font-family: $style6;
  letter-spacing: 2px;
}

#heart {
  color: rgb(206, 40, 40);
  animation: pulse 0.6s ease-in-out infinite;
}

@keyframes pulse {
  from {transform: scale(1)}
  to {transform: scale(1.1)}
}
#vuejs {
  color: #4BB483;
}


.dark-mode-icons {
  color: aqua !important;
  text-shadow: 0px 0px 5px aqua;

    &:hover {

      color: white !important;
      text-shadow: 0px 0px 10px white;
      transform: scale(1.2);
  
  }

}

.light-mode-icons {
  color: $lightmode;
  text-shadow: 0px 0px 2px black;

    &:hover {

      color: $lightmode !important;
      text-shadow: 0px 0px 5px $lightmode;
      transform: scale(1.2);

  }

}

.dark-mode-datename{
  background: $gradient2;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.light-mode-datename{
  background: $lightmode;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark-mode-madewith{
  color: white;
}

.light-mode-madewith{
  color: $lightmode !important;
}


// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #git-btn, #linkedin-btn, #stack-btn {
  padding: 0px;
  border-radius: 5px;
  width: auto;
}

.icon {
  margin: 0 auto;
}

#date-name {
  font-size: 14px;
}

#made-with {
  color: white;
  font-size: 12px;
}

#footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: #101010;
}


}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #git-btn, #linkedin-btn, #stack-btn {
  padding: 10px;
  border-radius: 5px;
  width: auto;
}


#made-with {
  color: white;
  font-size: 14px;
}


#footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: none;

}
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #git-btn, #linkedin-btn, #stack-btn {
  padding: 10px;
  border-radius: 5px;
  width: auto;
}

#made-with {
  color: white;
  font-size: 16px;
}

#footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: none;

}
}

</style>
