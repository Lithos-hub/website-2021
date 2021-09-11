<template>
  <h1 class="text-center text-uppercase" :class="lights ? 'dark-mode-title' : 'light-mode-title'">{{sectionTitle}}</h1>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "SectionTitle",
    props: ["sectionTitle"],
    computed: {
        ...mapState(["lights"])
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';

h1 {
font-weight: bold;
font-family: $style6 !important;
text-transform: uppercase;
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  h1 {
  letter-spacing: 10px;
  font-size: $h1_mobile;


}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  h1 {
  letter-spacing: 25px;
  font-size: 25px;
}
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  h1 {
  letter-spacing: 25px;
  font-size: 25px;


        }

    }

}

.dark-mode-title {
color: white;
text-shadow: 0px 0px 15px $primary;
}

.light-mode-title {
color: #151515;
text-shadow: 0px 0px 15px black;
}
</style>