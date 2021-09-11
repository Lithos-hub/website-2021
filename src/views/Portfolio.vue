<template>
  <v-container fluid class="fadeIn" id="portfolio">

    <audio preload="auto" src="../assets/audio/btn3.mp3" id="portfoliofx"></audio>


     <SectionTitle :sectionTitle="title" />


    <v-row>
      <v-col lg="6" cols="12">
    <v-btn block class="mb-0 py-lg-4 py-md-3 py-2 superior-btn" :class="lights ? 'superior-btn-dark' : 'superior-btn-light'" @click="designs = !designs; apps = false" :style="designs ? 'box-shadow: 0px 0px 10px aqua; background: #151515' : 'box-shadow: none'">
      <span>{{ designs === false ? showdesigns : hidedesigns }}</span>
    </v-btn>
      </v-col>
      <v-col lg="6" cols="12">
            <v-btn block class="mb-0 py-lg-4 py-md-3 py-2 superior-btn" :class="lights ? 'superior-btn-dark2' : 'superior-btn-light2'" @click="apps = !apps; designs = false" :style="apps ? 'box-shadow: 0px 0px 10px aqua; background: #151515' : 'box-shadow: none'">
     <span>{{ apps === false ? showapps : hideapps }}</span>
    </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="!designs && !apps" class="fadeIn">
      <v-col></v-col>
      <v-col lg="4" cols="12">
        <Comebackbtn />
        </v-col>
      <v-col></v-col>
    </v-row>

  <div v-if="designs">
      <v-row class="fadeIn">
        <v-col lg="2" v-for="(item, i) in designs_cards" :key="'A' + i" class="mx-auto">
          <a :href="item.link">
            <div
              class="cards mx-auto"
              dark
              @mouseenter="playfx"
              :class="lights ? 'cards-dark' : 'cards-light'" 
            >
              <v-img
                class="card-img white--text align-end"
                height="200px"
                :src="item.img"
                
              >
              </v-img>
             

                <h2 class="card-title">{{item.name}}</h2>

                <v-divider></v-divider>

              <p class="pb-0 card-subtitle">
                {{item.subtitle}}
              </p>
         
            </div>
          </a>
        </v-col>
      </v-row>
  </div>


<div v-if="apps" class="fadeIn">
  <div v-if="!seeMoreApps">
      <v-row>
        <v-col lg="2" cols="12" v-for="(item, i) in apps_cards.group1" :key="'B' + i" class="mx-auto">
          <div>
          <a :href="item.link">
            <div
              class="cards mx-auto"
              @mouseenter="playfx" 
              :class="lights ? 'cards-dark' : 'cards-light'"
            >
              <v-img
                class="card-img white--text align-end"
                :src="item.img">
              </v-img>
                <h2 class="card-title">{{item.name}}</h2> 
               <v-row>
               <v-col class="mx-auto text-center" lg="4" v-for="(item, i) in item.tech_icons" :key="'C' + i"><v-icon class="tech-icon">{{item.techicon}}</v-icon><p class="tech-name">{{item.techname}}</p></v-col>
               </v-row>
              <p class="pb-0 card-subtitle">
                <v-divider></v-divider>
                {{item.subtitle}}
              </p>
            </div>
          </a>
          </div>
        </v-col>
        <v-col lg="1" cols="12">
          <audio src="../assets/audio/btn4.mp3" id="seeMoreFx"></audio>
           <v-btn height="100%" small dark @click="seeMoreApps = !seeMoreApps" :class="lights ? 'seemore-btn-dark' : 'seemore-btn-light'" @mouseenter="playfx2">See more</v-btn>
        </v-col>
      </v-row>
  </div>

<div v-if="seeMoreApps" class="fadeIn">
      <v-row>
         <v-col lg="2" cols="12">
            <audio src="../assets/audio/btn5.mp3" id="comeBackFx"></audio>
           <v-btn height="100%" small dark @click="seeMoreApps = !seeMoreApps" :class="lights ? 'comeback-btn-dark' : 'comeback-btn-light'"  @mouseenter="playfx3">Come back</v-btn>
        </v-col>
        <v-col lg="3" v-for="(item, i) in apps_cards.group2" :key="'D' + i" class="mx-auto">
          <a :href="item.link">
            <div
              class="cards mx-auto"
              @mouseenter="playfx"
              :class="lights ? 'cards-dark' : 'cards-light'"
            >
              <v-img
                class="card-img white--text align-end"
                height="200px"
                :src="item.img"
                
              >
              </v-img>
                <h2 class="card-title">{{item.name}}</h2>
                 <v-row>
               <v-col class="mx-auto text-center" lg="3" v-for="(item, i) in item.tech_icons" :key="'C' + i"><v-icon class="tech-icon">{{item.techicon}}</v-icon><p class="tech-name">{{item.techname}}</p></v-col>
               </v-row>
              <p class="pb-0 card-subtitle">
                <v-divider></v-divider>
                {{item.subtitle}}
              </p>
            </div>
          </a>
        </v-col>
      </v-row>
  </div>
</div>


  </v-container>
</template>

<script>
import Comebackbtn from '../components/Comebackbtn';
import SectionTitle from '../components/SectionTitle';

import {mapState} from "vuex";

export default {
  components: { 
    Comebackbtn, 
    SectionTitle },
  name: "Portfolio",
  data() {
    return {
    title: "Portfolio",
    designs: false,
    apps: false,
    apps_group1: false,
    apps_group2: false,
    seeMoreApps: false,
    seeMoreDesigns: false,
    showdesigns: "Show designs",
    hidedesigns: "Hide designs",
    showapps: "Show apps",
    hideapps: "Hide apps",
    selectedItem: 1,
    designs_cards: [
      {name: "Blog", 
      subtitle: "A simple misellaneous blog design", 
      link: "https://blog-mainsite.netlify.app", 
      img: require("../assets/img/blog-design.jpg")},
      {name: "IT Company", 
      subtitle: "Technology company main website", 
      link: "https://it-company-mainsite.netlify.app/", 
      img: require("../assets/img/kraken-design.jpg")},
      {name: "Travel Agency", 
      subtitle: "Travel agency main website", 
      link: "https://travel-agency-mainsite.netlify.app/", 
      img: require("../assets/img/travel-design.jpg")},
      {name: "Product", 
      subtitle: "Smartphone model main website", 
      link: "https://product-mainsite.netlify.app/", 
      img: require("../assets/img/smartphone-design.jpg")},
      {name: "NGO", 
      subtitle: "NGO main website", 
      link: "https://ngo-mainsite.netlify.app/", 
      img: require("../assets/img/ngo-design.jpg")},
    ],
    apps_cards: {
      group1: [

      {name: "PokéAPP",
      tech_icons: [
        {techname: "HTML", techicon: "mdi-language-html5",},
        {techname: "CSS", techicon: "mdi-language-css3",},
        {techname: "JavaScript", techicon: "mdi-language-javascript",},
        {techname: "SASS", techicon: "mdi-sass",},
        {techname: "Webpack", techicon: "mdi-webpack",},
        ], 
      subtitle: "Search and show info about Pokémon", 
      link: "https://pokeapp-app.netlify.app/", 
      img: require("../assets/img/apps-img/pokeapp-logo.jpg",)},

      {name: "iVitae",
      tech_icons: [
        {techname: "Vuejs", techicon: "mdi-vuejs",},
        {techname: "HTML", techicon: "mdi-language-html5",},
        {techname: "CSS", techicon: "mdi-language-css3",},
        {techname: "SASS", techicon: "mdi-sass",},
        {techname: "JavaScript", techicon: "mdi-language-javascript",},
        {techname: "Vuetify", techicon: "mdi-vuetify",},
        ], 
      subtitle: "Create your CV or Cover Letter and download it in PDF", 
      link: "https://ivitae.netlify.app/", 
      img: require("../assets/img/apps-img/ivitae-bar.jpg",)},

      {name: "iMovies",
      tech_icons: [
        {techname: "Vuejs", techicon: "mdi-vuejs",},
        {techname: "API", techicon: "mdi-api",},
        {techname: "HTML", techicon: "mdi-language-html5",},
        {techname: "CSS", techicon: "mdi-language-css3",},
        {techname: "SASS", techicon: "mdi-sass",},
        {techname: "JavaScript", techicon: "mdi-language-javascript",},
        {techname: "Vuetify", techicon: "mdi-vuetify",},
        {techname: "LocalStorage", techicon: "mdi-database"},
      ],  
      subtitle: "App about movies powered with the Movie Database API", 
      link: "https://imovies-app.netlify.app/", 
      img: require("../assets/img/apps-img/imovies-bar.jpg")},

      {name: "iRead", 
      tech_icons: [
        {techname: "Vuejs", techicon: "mdi-vuejs",},
        {techname: "API", techicon: "mdi-api",},
        {techname: "HTML", techicon: "mdi-language-html5",},
        {techname: "CSS", techicon: "mdi-language-css3",},
        {techname: "SASS", techicon: "mdi-sass",},
        {techname: "JavaScript", techicon: "mdi-language-javascript",},
        {techname: "Vuetify", techicon: "mdi-vuetify",},
        {techname: "LocalStorage", techicon: "mdi-database"},
      ],  
      subtitle: "App about books powered with Google Books and The New York Times APIs", 
      link: "https://iread-app.netlify.app/", 
      img: require("../assets/img/apps-img/iread-bar.jpg")},

      ],
      group2: [

      {name: "iDash",
      tech_icons: [
        {techname: "Vuejs", techicon: "mdi-vuejs",},
        {techname: "API", techicon: "mdi-api",},
        {techname: "HTML", techicon: "mdi-language-html5",},
        {techname: "CSS", techicon: "mdi-language-css3",},
        {techname: "SASS", techicon: "mdi-sass",},
        {techname: "JavaScript", techicon: "mdi-language-javascript",},
        {techname: "Vuetify", techicon: "mdi-vuetify",},
        {techname: "Firebase", techicon: "mdi-firebase",},
      ],   
      subtitle: "Dashboard app for business", 
      link: "https://idash.netlify.app/", 
      img: require("../assets/img/apps-img/idash-bar.jpg")},

      {name: "Auth system #1",
      tech_icons: [
        {techname: "Vuejs", techicon: "mdi-vuejs",},
        {techname: "HTML", techicon: "mdi-language-html5",},
        {techname: "CSS", techicon: "mdi-language-css3",},
        {techname: "JavaScript", techicon: "mdi-language-javascript",},
        {techname: "LocalStorage", techicon: "mdi-database",},
      ],   
      subtitle: "Login / Register system using LocalStorage", 
      link: "https://localstorage-auth-app.netlify.app/", 
      img: require("../assets/img/apps-img/auth1-bar.jpg")},

      {name: "Auth system #2",
      tech_icons: [
        {techname: "Vuejs", techicon: "mdi-vuejs",},
        {techname: "HTML", techicon: "mdi-language-html5",},
        {techname: "CSS", techicon: "mdi-language-css3",},
        {techname: "SASS", techicon: "mdi-sass",},
        {techname: "JavaScript", techicon: "mdi-language-javascript",},
        {techname: "Vuetify", techicon: "mdi-vuetify",},
        {techname: "Firebase", techicon: "mdi-firebase",},
      ],   
      subtitle: "Login / Register system using Firebase and Google authenticantion system", 
      link: "https://firebase-auth-app.netlify.app/", 
      img: require("../assets/img/apps-img/auth2-bar.jpg")},

      ]
      }
    };
  },
  computed: {
    ...mapState(["sound", "lights"])
  },
  methods: {
    playfx() {
    if(this.sound){
    const portfoliofx = document.getElementById("portfoliofx");
    portfoliofx.volume = 1;
    portfoliofx.play();
    portfoliofx.currentTime = 0;
    }
   },
    playfx2() {
      if(this.sound){
      const seeMoreFx = document.getElementById("seeMoreFx");
      seeMoreFx.volume = 1;
      seeMoreFx.play();
      seeMoreFx.currentTime = 0;
    }
   },
    playfx3() {
      if(this.sound){
      const comeBackFx = document.getElementById("comeBackFx");
      comeBackFx.volume = 1;
      comeBackFx.play();
      comeBackFx.currentTime = 0;
    }
  }
}
}
</script>

<style lang="scss" scoped>
@import "src/scss/variables";


.fadeIn {
  animation: fade 1s ease-in-out;
   font-family: $style6;
}

@keyframes fade{
  from {opacity: 0}
  to {opacity: 1}
}

* {
  text-decoration: none;
}

.superior-btn {
  color: white;
  transition: 1s;
  text-shadow: 0px 0px 5px black;
  font-family: $style6;
}

.superior-btn-dark {
  background: url("../assets/img/spaceimg/mars.jpg");
  background-size: cover;
  background-position: center;
  animation: motion 10s;

}

.superior-btn-dark2 {

  background: url("../assets/img/spaceimg/moon.jpg");
   background-size: cover;
  background-position: center;
  animation: motion 10s;

}

.superior-btn-light {

  background: url("../assets/img/spaceimg/neptune.jpg");
   background-size: cover;
  animation: motion 10s;
    background-position: center;

}

.superior-btn-light2 {

  background: url("../assets/img/spaceimg/uranus.png");
   background-size: cover;
    background-position: center;
  animation: motion 10s;

}

.seemore-btn-dark, .seemore-btn-light, .comeback-btn-dark, .comeback-btn-light  {
  transition: 0.3s ease-in-out;
}



.seemore-btn-dark:hover {
 background: transparent !important;
  box-shadow: 0px 0px 10px aqua;
  color: cyan;
}

.comeback-btn-dark:hover {
 background: transparent !important;
  box-shadow: 0px 0px 10px aqua;
  color: cyan;
}

.seemore-btn-light:hover {
 background: transparent !important;
  box-shadow: 0px 0px 10px  #202020;
  color: #202020;
}

.comeback-btn-light:hover {
 background: transparent !important;
  box-shadow: 0px 0px 10px  #202020;
  color: #202020;
}

.card-subtitle {
background:  $gradient1;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
    }

.cards-dark {
  color: white;

   .tech-name {
  background: $gradient2;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .cards-title {
    color: white;
    text-shadow: 0px 0px 20px $primary, 0px 0px 10px white;
  }

   &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px black;
    cursor: pointer;
    background: none;

    .card-title {
    color: white;
    text-shadow: 0px 0px 20px cyan;
    }

    .tech-icon {
    background: $gradient1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    .card-subtitle {
    background: $gradient1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  }
  
}

.cards-light {
  color: black;

  .tech-name {
  background: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .cards-title {
    color: cyan;
    text-shadow: 0px 0px 20px $primary, 0px 0px 10px white;
  }

   &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px black;
    cursor: pointer;
    background: none;

    .card-title {
    color: black;
    text-shadow: 0px 0px 20px black;
    }

    .tech-icon {
    background: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    .card-subtitle {
    background: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  }
}


// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #portfolio{
  margin-bottom: 150px;
}

  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: $h1_mobile;
  font-family: $style6 !important;
  text-transform: uppercase;
  margin-bottom: 5px;
}


#view-apps-btn {

  background-attachment: fixed;
  color: white;
  font-size: $large_btn_mobile;
  letter-spacing: 10px;
  text-shadow: 0px 0px 5px black;
  transform: scale(1);
}

.superior-btn {
  font-size: 16px;
  letter-spacing: 10px;
}


.card-title {
  font-family: $style7;
  font-size: 2em;
  padding: 0px;
  text-align: center;
  width: 100%;
  transition: 0.5s ease-in-out;
  color: white;
}

.card-subtitle {
  font-size: 16px;
  font-family: $style6;
  text-align: center;
  margin-bottom: 50px;
  transition: 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.card-img {
  height: 10rem;
  transition: 0.3s ease-in-out;
}

.tech-icon {
  background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-name {
  font-size: 10px;
  font-weight: bold;
  color: white;
  font-family: $style6;
  text-transform: uppercase;
  opacity: 1;
  transition: 1s;
}

.cards {
  overflow: hidden;
  background: #181818;
  height: 100%;
  width: 100%;
  transition: 1s ease-in-out;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    transform: none;

  .card-img {
    transform: none;

  }
  }
}

.card-title {
    margin-top: 25px;
}

.tech-name {
  opacity: 1;
  
}

    
.card-subtitle {
font-weight: bold;
opacity: 1;
visibility: visible;
}

}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #portfolio{
  margin-bottom: 50px;
}
  h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: 25px;
  font-family: $style6 !important;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.superior-btn {
  font-size: 13px;
  letter-spacing: 10px;
}


.more-back-btn {
  transition: 0.5s;

  &:hover {
  background: transparent !important;
  box-shadow: 0px 0px 10px aqua;
  color: cyan;
}
}

.card-title {
  font-family: $style7;
  font-size: 1em;
  padding: 0rem;
  text-align: center;
  width: 100%;
  transition: 0.5s ease-in-out;
  color: white;
}

.card-subtitle {
  font-size: 0.8em;
  font-family: $style6;
  text-align: center;
  margin-bottom: 10px;
  transition: 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.card-img {
  transition: 0.3s ease-in-out;
  height: 7rem;
}

.tech-name {
  font-size: 7px;
  font-weight: bold;
  color: white;
  font-family: $style6;
  text-transform: uppercase;
  opacity: 0;
  transition: 1s;
}


.cards {
  margin-top: 1rem;
  overflow: hidden;
  background: #181818;
  height: 35rem;
  width: 100%;
  transition: 1s ease-in-out;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px black;
    cursor: pointer;
    background: none;

    .card-title {
    margin-top: 25px;
    }

    .tech-name {
      opacity: 1;
      
    }
        
    .card-subtitle {
    font-weight: bold;
    opacity: 1;
    visibility: visible;
    }

    .card-img {
      transform: scale(1.1);
    }
  }
}
  
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #portfolio{
  margin-bottom: 0px;
}
    h1 {
  color: white;
  text-shadow: 0px 0px 15px $primary;
  letter-spacing: 25px;
  font-size: 25px;
  font-family: $style6 !important;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.more-back-btn {
  transition: 0.5s;

  &:hover {
  background: transparent !important;
  box-shadow: 0px 0px 10px aqua;
  color: cyan;
}
}


.superior-btn {
  font-size: 16px;
  letter-spacing: 10px;
}

.card-title {
  font-family: $style7;
  font-size: 2em;
  padding: 1rem;
  text-align: center;
  width: 100%;
  transition: 0.5s ease-in-out;
  color: white;
}

.card-subtitle {
  font-size: 0.9em;
  font-family: $style6;
  text-align: center;
  transition: 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.card-img {
  transition: 0.3s ease-in-out;
  height: 13rem;
}


.tech-name {
  font-size: 10px;
  font-weight: bold;
  color: white;
  font-family: $style6;
  text-transform: uppercase;
  opacity: 0;
  transition: 1s;
}


.cards {
  margin-top: 1rem;
  overflow: hidden;
  background: #181818;
  height: 45rem;
  width: 100%;
  transition: 1s ease-in-out;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px black;
    cursor: pointer;
    background: none;

    .card-title {
    margin-top: 25px;
    }

    .tech-name {
      opacity: 1;
      
    }
        
    .card-subtitle {
    font-weight: bold;
    opacity: 1;
    }

    .card-img {
      transform: scale(1.3);
    }
  }
}
}


@keyframes motion {
  from {
    background-position: top;

  }
  to {
    background-position: center;

  }
}

</style>
