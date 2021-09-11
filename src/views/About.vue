<template>
  <v-container fluid class="fadeIn" id="aboutme">
      <SectionTitle :sectionTitle="title" />

      <v-row>
        <v-col></v-col>
        <v-col lg="8" cols="12">

    <div id="main-text" :class="lights ? 'dark-mode-text' : 'light-mode-text'">

      <li>Hi, I'm Carlos. I started learning Web Development in October 2019,
        but, up to that point, I was quite a different person.</li>
      <li>When I was 9 years old I started studying music and shortly after I
        turned 14, I fell in love with the electric guitar.
      <li>At the age of 23 I started composing my first songs and now, in 2021,
        I have more than 7 hours of music composed,
        more than 140 songs and 12 albums released! (In fact, the music and
        sounds from on this site were made by me)
      <li>In 2020 I finished my university studies in Musicology. With such a
        damaged job market (something that the COVID
        made even worse) and a degree that disappointed me deeply, I seriously
        considered starting a new and totally different path.</li>
      <li>Since I was a child I have always liked computer science, although I
        had no idea what programming was.</li>
      <li>In October 2019, before finishing my Degree, I started learning
        Python, and over the months I learned more and
        more and with different technologies oriented to front-end development.
        My final Degree project was about the Artificial Intelligence in music
        composition, so this shows that my interest in technology was growing all the time.
      <li>At the same time as working as a front-end developer, I am studying
        an official higher education in Web Application
        Development while continuing my self-taught training in fields such
        as cloud computing.
</li>
    </div>
        </v-col>
        <v-col></v-col>
      </v-row>
       <v-row>
      <v-col></v-col>
      <v-col lg="4" cols="12">
        <Comebackbtn />
        </v-col>
      <v-col></v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import Comebackbtn from '../components/Comebackbtn';
import SectionTitle from '../components/SectionTitle';

export default {
  components: {
    Comebackbtn,
    SectionTitle,
  },
  data() {
    return {
      title: 'About me',
    };
  },
  computed: {
    ...mapState(['lights']),
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

li {
  list-style: none;
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #aboutme{
    margin-bottom: 150px;
  }
  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 10px;
  font-size: $h1_mobile;
  font-family: $style6 !important;
  text-transform: uppercase;

}

#main-text {
  margin-top: 0%;
  font-size: 16px;
  font-family: $style7;
  text-align: center;
  font-weight: bold;

  li {
    margin-top: 10px;
    margin-bottom: 10px;

  }
}
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #aboutme{
  margin-bottom: 50px;
  }
  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: 25px;
  font-family: $style6 !important;
  text-transform: uppercase;

}

#main-text {
  margin-top: 0%;
  font-size: 18px;
  font-family: $style7;
  text-align: center;
  font-weight: bold;

  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #aboutme{
  margin-bottom: 0px;
  }
  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: 25px;
  font-family: $style6 !important;
  text-transform: uppercase;

}

#main-text {
  margin-top: 5%;
  font-size: 20px;
  font-family: $style7;
  text-align: center;
  font-weight: bold;

  li {
    margin-top: 10px;
    margin-bottom: 10px;

  }
}
}

.dark-mode-text {
  transition: 1s ease-in-out;
  background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

   h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
   }
}

.light-mode-text {
  transition: 1s ease-in-out;
  background: $lightmode;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  h1 {
  color: $lightmode;
  text-shadow: none;
  }
}

</style>
