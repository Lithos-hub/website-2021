<template>
  <v-container fluid class="fadeIn" id="curriculum">

    <SectionTitle :sectionTitle="title" />

    <v-row>
      <v-col lg="6" cols="12">
    <v-btn block class="mb-0 py-lg-4 py-md-3 py-2 superior-btn" :class="lights ? 'superior-btn-dark' : 'superior-btn-light'"  @click="timeline = !timeline; curriculum = false" :style="timeline ? 'box-shadow: 0px 0px 10px aqua; background:#151515' : 'box-shadow: none'">
      <span>{{ timeline === false ? showtimeline : hidetimeline }}</span>
    </v-btn>
      </v-col>
      <v-col lg="6" cols="12">
            <v-btn block class="mb-0 py-lg-4 py-md-3 py-2 superior-btn" :class="lights ? 'superior-btn-dark2' : 'superior-btn-light2'" @click="curriculum = !curriculum; timeline = false" :style="curriculum ? 'box-shadow: 0px 0px 10px aqua; background:#151515' : 'box-shadow: none'">
     <span>{{ curriculum === false ? showcv : hidecv }}</span>
    </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="!timeline && !curriculum" class="fadeIn">
      <v-col></v-col>
      <v-col lg="4" cols="12">
        <Comebackbtn />
        </v-col>
      <v-col></v-col>
    </v-row>

<div v-if="timeline">
          <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="fadeIn">
            <v-timeline-item v-for="(item, i) in timeline_items" :key="'A' + i" hide-dot>
              <v-card id="timeline-card" :class="lights ? 'card-dark-mode' : 'card-light-mode'" dark>
                <div id="card-period" style="text-transform: uppercase">{{ item.period }}</div>
                <v-divider></v-divider>
                <div class="text-center pt-2">
                  <v-icon class="timeline-logos">{{item.icon}}</v-icon>
                </div>
                <div id="card-title">{{ item.title }}</div>
                <v-card-text class="white text--primary">
                  <p>
                    {{ item.text }}
                  </p>
                  <div v-if="item.certificate.length > 0">
                    <a :href="item.certificate" style="text-decoration: none">
                      <v-btn block class="view-certificate-btn">View Certificate</v-btn>
                    </a>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <div class="my-5"></div>
          </v-timeline>
</div>

<div v-if="curriculum" :class="lights ? 'text-dark-mode' : 'text-light-mode'">
    <v-row v-if="!seeMore" class="fadeIn">
      <v-col lg="6">
        <!-- EDUCATION -->
        <h1 class="cv-h1">Education</h1>
        <!-- ****************************************** -->
        <h3> <span class="cv-h3">2020 - Currently</span></h3>
        <h4>
          Higher Technical Certificate in Web App Development with Cloud Computing
          specialization (CFGS). <br />
          <i>
            [ Grado Superior en Desarrollo de Aplicaciones Web con especialidad en Cloud
            Computing. ]</i
          >
        </h4>
        <small class="mb-5 d-block"
          >In: Centro Superior de Formación Europa Sur (Cesur).</small
        >
        <!-- ****************************************** -->
        <h3> <span class="cv-h3">2019 - Currently</span></h3>
        <h4>Self-taught training in the field of programming and web development.</h4>
        <ul style="list-style: none" class="ml-5">
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>
            Continuous learning in programming languages such as Python, C# and Java and
            web development technologies with HTML, CSS, JavaScript, TypeScript, Vuejs and
            Angular among others such as PHP, MySQL, Bootstrap and Wordpress.
          </li>
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>
            Development of this website and the designs and applications shown in my
            portfolio section. Repositories available at: github.com/Lithos-hub
          </li>
        </ul>
        <!-- ****************************************** -->
        <h3> <span class="cv-h3">2016 - 2020</span></h3>
        <h4>
          University Degree: History and Science of Music and Music Technology. <br />
          <i>[ Grado en Historia y Ciencias de la Música y Tecnología Musical. ]</i>
        </h4>
        <small class="d-block">In: Universidad Autónoma de Madrid (UAM).</small>
        <ul style="list-style: none" class="ml-5">
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>University average of 9.</li>
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>3 honorary mention.</li>
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>
            Degree Final work title: 21st century musical composition tools based on
            artificial intelligence.<br />
            <i
              >[ Herramientas de composición musical en el siglo XXI basadas en la
              inteligencia artificialL. ]</i
            >
          </li>
        </ul>
      </v-col>
      <v-col lg="5" cols="12">
        <!-- EXPERIENCE -->
        <h1 class="cv-h1">Experience</h1>
        <!-- ****************************************** -->
        <h3> <span class="cv-h3">MAR. 2021 - Currently</span></h3>
        <h4>Front-end Developer. <br /></h4>
         <small class="d-block"
          >In: Grupo CMC.</small
        >
        <ul style="list-style: none" class="ml-5">
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>Development and maintenance of web applications.</li>
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>Agile methodologies.</li>
        </ul>
        <!-- ****************************************** -->
        <h3> <span class="cv-h3">2015 - 2020</span></h3>
        <h4>Music composer / Producer / Sound designer. <br /></h4>
        <ul style="list-style: none" class="ml-5">
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>Stock music for Songs To Your Eyes and Atomica Music Library (USA).</li>
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>Soundtracks and sound design for videogames (Spain)</li>
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>Soundtrack for documentary with GranAngular TV Underwater productions.</li>
        </ul>
        <!-- ****************************************** -->
        <h3> <span class="cv-h3">SEP. 2017 - DEC. 2018</span></h3>
        <h4>University Internship.</h4>
        <small class="d-block"
          >In: Centro Superior de Investigación y Promoción de la Música.</small
        >
        <ul style="list-style: none" class="ml-5">
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>Music research.</li>
          <li class="cv-p-li"> <v-icon class="cv-check-icon">mdi-check</v-icon>Documentation and archive management.</li>
        </ul>
      </v-col>
    <v-col lg="1" cols="12">

       <audio src="../assets/audio/btn4.mp3" id="seeMoreFx"></audio>
      <v-btn height="100%" small dark @click="seeMore = !seeMore" :class="lights ? 'seemore-btn-dark' : 'seemore-btn-light'" @mouseenter="playfx">See more</v-btn>
    </v-col>
    </v-row>
      <v-row v-show="seeMore" class="fadeIn">
        <v-col lg="1" cols="12">
       <audio src="../assets/audio/btn5.mp3" id="comeBackFx"></audio>
        <v-btn height="100%" small dark @click="seeMore = !seeMore" :class="lights ? 'comeback-btn-dark' : 'comeback-btn-light'" @mouseenter="playfx2">Come back</v-btn>
        </v-col>
      <v-col lg="4" cols="12">
         <!-- COMPLEMENTARY EDUCATION -->
        <h1 class="cv-h1">Complementary education</h1>
        <v-card dark>
        <v-list-item v-for="(item, i) in comp_education" :key="'B' + i">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="cv-check-icon">mdi-check</v-icon><span class="cv-p">{{item}}</span>
                  </v-list-item-title>
              </v-list-item-content>
        </v-list-item>
        <div class="text-center learning-now">Learning now</div>
        <v-list-item v-for="(item, i) in learning_now" :key="'B2' + i">
           <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="cv-cog-icon">mdi-cog</v-icon><span class="learning-now">{{item}}</span>
                  </v-list-item-title>
              </v-list-item-content>
        </v-list-item>
        </v-card>
      </v-col>
      <v-col lg="4" cols="12">
        <h1 class="cv-h1">
          <v-row no-gutters>
            <v-col  lg="6" class="text-center">Software</v-col>
            <v-col  lg="6" class="text-center">Technologies</v-col>
          </v-row>
          </h1>
        <v-row>
          <v-col>
                    <v-card dark>
                <v-list-item v-for="(item, i) in software" :key="'C' + i">
              <v-list-item-content>
                <v-list-item-title class="text-center">
                 <span class="cv-p">{{item}}</span>
                  </v-list-item-title>
              </v-list-item-content>
        </v-list-item>
        </v-card>
          </v-col>
          <v-col>
        <v-card dark>
        <v-list-item v-for="(item, i) in technologies" :key="'D' + i">
              <v-list-item-content>
                <v-list-item-title class="text-center">
                <span class="cv-p">{{item}}</span>
                  </v-list-item-title>
              </v-list-item-content>
        </v-list-item>
        </v-card>
          </v-col>
        </v-row>
            
        </v-col>
        <!-- CONTACT -->
        <v-col lg="3">
        <h1 class="cv-h1">Contact / Extra info</h1>
        <v-card dark>
          <v-container>

        <div class="text-center">
          <v-icon class="cv-icons">mdi-email</v-icon>
          <a href="mailto:lithos.contact@gmail.com">
            <p class="text-center">lithos.contact@gmail.com</p>
          </a>
          <v-icon class="cv-icons">mdi-linkedin</v-icon>
          <a href="https://www.linkedin.com/in/carlos-segura-garcia">
            <p class="text-center">https://www.linkedin.com/in/carlos-segura-garcia</p>
          </a>
          <v-icon class="cv-icons">mdi-web</v-icon>
          <a href="https://carlosseguragarciaweb.com">
            <p class="text-center">https://carlosseguragarciaweb.com</p>
          </a>
          <v-icon class="cv-icons">mdi-github</v-icon>
          <a href="https://github.com/Lithos-hub">
            <p class="text-center">https://github.com/Lithos-hub</p>
          </a>
          <v-icon class="cv-icons">mdi-stack-overflow</v-icon>
          <a href="https://stackoverflow.com/cv/carlos-segura">
            <p class="text-center">https://stackoverflow.com/cv/carlos-segura</p>
          </a>
          <v-divider></v-divider>
          <v-icon class="cv-icons">mdi-cake-variant</v-icon>
          <p class="d-block text-center">Birthdate: 10 August 1992</p>
          <v-icon class="cv-icons">mdi-home</v-icon>
          <p class="d-block text-center">Based in Madrid</p>
          <v-icon class="cv-icons">mdi-car</v-icon>
          <p class="d-block text-center">Driving license (B)</p>
          <v-icon class="cv-icons">mdi-account-voice</v-icon>
          <p class="d-block text-center">Spanish (Native) / English (B2 - C1)</p>
          <v-icon class="cv-icons">mdi-paw</v-icon>
          <p class="d-block text-center">2 pets</p>
        </div>
              </v-container>
           </v-card>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

import Comebackbtn from "../components/Comebackbtn";
import SectionTitle from "../components/SectionTitle";

export default {
  name: "CV",
  components: {
    Comebackbtn,
    SectionTitle
  },
  data() {
    return {
      title: "Curriculum Vitae",
      e1: 1,
      seeMore: false,
      timeline: false,
      curriculum: false,
      showtimeline: `Show developer timeline`,
      hidetimeline: "Hide timeline",
      showcv: "Show CV",
      hidecv: "Hide CV",
      comp_education: [
        "Cloud Computing (Google Actívate).",
        "Mobile App Development (Google Actívate).",
        "Introduction to AWS Machine Learning Services (AWS Training and Certification).",
        "SQL, MySQL and Microsoft SQL Server courses (Others).",
        "Python 3 course (Udemy).",
        "Web Development course (Udemy).",
        "Angular 10 course (Udemy).",
        "JavaScript (ES5) course (Udemy).",
        "Advanced JavaScript (Udemy).",
        "C# Course (Others).",
        "Bootstrap 4 course (Udemy).",
        "Vue.js course (Udemy).",
      ],
      learning_now: [
          "AWS Certified Cloud Practitioner.",
      ],
      software: [
        "Adobe InDesign",
        "Adobe Photoshop",
        "Adobe Premiere",
        "Adobe XD",
        "Visual Studio Code",
        "Visual Studio 2019",
      ],
      technologies: [
        "Python",
        "C#",
        "Vue.js",
        "Angular 10",
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "TypeScript",
        "Git",
        "MySQL",
        "Wordpress",
        "Bootstrap 5",
      ],
      timeline_items: [
        {
          icon: "mdi-language-python",
          title: "Curso Maestro de Python 3: Aprende desde Cero",
          period: "OCT. 2019 - DEC. 2019",
          text:
            "My first steps into the programming world was with Python. Thanks to this course I could take my first steps in the programming world in a very didactic and pleasant way. Python, in spite of being a language very oriented to data or techniques like Machine Learning, I believe that it is one of the ideal languages to begin in the programming, since it is very intuitive with a very friendy sintax language.",
          certificate: "https://www.udemy.com/certificate/UC-FIAI7BJ8",
        },
        {
          icon: "mdi-web",
          title: "Curso de Desarrollo Web Completo 2.0",
          period: "DEC. 2019 - FEB. 2020",
          text:
            "After finishing the course of Python 3, I went into web development. Thanks to this course I could have a global vision of what is web development and its enormous possibilities. The main technologies I worked with during the course were: HTML, CSS, JavaScript, JQuery, Bootstrap, Wordpress, MySQL, PHP and the use of APIs.",
          certificate:
            "https://www.udemy.com/certificate/UC-f2929d04-4d61-47d6-bdfa-b943305a820c",
        },
        {
          icon: "mdi-angular",
          title: "Angular: De cero a experto (Angular 10+)",
          period: "FEB. 2020 - APR. 2020",
          text:
            "While learning about web development, I started reading and researching about front-end frameworks. With this course, I could start my first steps with the handling of frameworks. It was a very interesting course, maybe the one that marked a turning point in my learning, since I started to develop my first applications and to put in practice all my knowledge until now. The teacher, Fernando Herrera, is also a great professional and teacher with whom you learn through the realization of fun and enjoyable projects. Highly recommended!",
          certificate:
            "https://www.udemy.com/certificate/UC-620154e6-9d6e-4cd1-9955-93bf75b3e91b",
        },
        {
          icon: "mdi-google",
          title: "Desarrollo de Apps Móviles.",
          period: "MAR. 2020",
          text:
            "Google Actívate has a series of free online courses that provide you with specific knowledge of a particular area. This course addressed the development of mobile applications in iOS and Android, as well as other areas such as Augmented Reality, e-commerce and development platforms. In order to see my certificate, go to the link below and introduce this ID: VRW UA7 9DF",
          certificate:
            "https://learndigital.withgoogle.com/activate/validate-certificate-code",
        },
        {
          icon: "mdi-language-javascript",
          title: "Javascript: de cero hasta los detalles (ES5)",
          period: "APR. 2020",
          text:
            "Having a good command of JavaScript is vital for a web developer. With this course I went deeper into the language, getting a clearer view of it.",
          certificate:
            "https://www.udemy.com/certificate/UC-304015d0-45aa-42a0-8fe1-13516ee988ae/",
        },
        {


          icon: "mdi-language-csharp",
          title: "Curso C# [Pildoras Informáticas]",
          period: "SEP. 2020 - OCT. 2020",
          text:
            "In order not to leave pure programming aside, I decided to start learning with C#. The course, about 32 hours long and more than 100 videos, was excellent. Not only did it help me learn C#, but it also reinforced my knowledge of Object Oriented Programming and helped me start using Vistual Studio 2019 and its powerful programming and application design tools.",
          certificate: "",
        },
        {
          icon: "mdi-database",
          title: "Curso SQL [Pildoras Informáticas]",
          period: "OCT. 2020",
          text:
            "This course was very useful for learning about the SQL language and database management. By having some notions about MySQL, I was also able to reinforce and strengthen those skills.",
          certificate: "",
        },
        {
          icon: "mdi-school",
          title:
            "Grado Superior en Desarrollo de Aplicaciones Web con especialidad en Cloud Computing",
          period: "OCT. 2020 - CURRENTLY",
          text:
            "In order to obtain a professional competence in the field of web development, I wanted to start my studies in this degree. I specifically chose this one because of the Cloud Computing Specialization, since it is the only degree that offers this field and I think it can have a lot of professional projection in the future. As has long been known, cloud platforms provide a whole world of possibilities and advantages in the corporate environment.",
          certificate: "",
        },
        {
          icon: "mdi-vuejs",
          title: "Vuejs. De 0 a experto.",
          period: "OCT. 2020 - JAN. 2021",
          text:
            "Vuejs is, so far, the development technology that I liked the most and with which I felt most comfortable. Thanks to this course I have acquired a series of knowledge that have helped me to develop a whole series of designs and web applications. ",
          certificate: "https://www.udemy.com/certificate/UC-1617a4cf-29cd-4f8c-a451-2d27961e66e5/",
        },
        {
          icon: "mdi-bootstrap",
          title: "Bootstrap 4. De 0 a experto. Curso completo + Formularios con PHP",
          period: "OCT. 2020 - NOV. 2020",
          text:
            "In parallel to the Vuejs course, I was also taking this other one. Bootstrap is, without a doubt, the most powerful CSS framework I have ever known. In this course I saw in depth all the components and possibilities that Bootstrap offers. The course also has extra content oriented to the creation of forms with PHP and an introduction to SASS.",
          certificate:
            "https://www.udemy.com/certificate/UC-479d142f-0f8f-446c-89ce-5f8fabf03189/",
        },
        {
          icon: "mdi-google",
          title: "Cloud Computing",
          period: "JAN. 2021",
          text:
            "As I was doing an Higher Technical Certificate with a specialty in Cloud Computing, I wanted to start taking my first steps in that field. With this course, I was able to understand, not only what Cloud Computing is, but how and for what it is used, its advantages and the different types of Cloud environments that exist. Without a doubt, a very recommendable course to receive an approach to the Cloud world. In order to see my certificate, go to the link below and introduce this ID: GGL KX3 7RB",
          certificate:
            "https://learndigital.withgoogle.com/activate/validate-certificate-code",
        },
        {
          icon: "mdi-amazon",
          title: "Amazon Web Services - Cloud Practitioner",
          period: "FEB. 2021 - Currently",
          text:
            "In parallel to my education as a front-end developer, I am preparing for the AWS Certified Cloud Practitioner certification.",
          certificate:
            "",
        },
      ],
    };
  },
  computed: {
    ...mapState(["sound", "lights"])
  },
  methods: {
  playfx() {
      if(this.sound){
      const seeMoreFx = document.getElementById("seeMoreFx");
      seeMoreFx.volume = 1;
      seeMoreFx.play();
      seeMoreFx.currentTime = 0;
    }
   },
    playfx2() {
      if(this.sound){
      const comeBackFx = document.getElementById("comeBackFx");
      comeBackFx.volume = 1;
      comeBackFx.play();
      comeBackFx.currentTime = 0;
    }
   },
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.v-timeline-item__body > .v-card:not(.v-card--flat):before, .v-timeline-item__body > .v-card:not(.v-card--flat):after {
  display: none;
}

.theme--light.v-timeline::before {
  display: none;
}

* {
  text-align: justify;
  word-break: normal;
  font-family: $style6;
}

.superior-btn {
  color: white;
  transition: 1s;
  text-shadow: 0px 0px 5px black;
  font-family: $style6;
}

.superior-btn-dark {
  background: url("../assets/img/spaceimg/jupiter.jpg");
  background-size: cover;
  background-position: center;
  animation: motion 10s;

}

.superior-btn-dark2 {

  background: url("../assets/img/spaceimg/saturn.jpg");
   background-size: cover;
  background-position: center;
  animation: motion 10s;

}

.superior-btn-light {

  background: url("../assets/img/spaceimg/venus.jpg");
   background-size: cover;
  animation: motion 10s;
    background-position: center;

}

.superior-btn-light2 {

  background: url("../assets/img/spaceimg/nebula.jpg");
   background-size: cover;
    background-position: center;
  animation: motion 10s;

}

.card-dark-mode{
  background: #202020 !important;

  p {
  background: $gradient4;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  #card-period {
    color: $tertiary;
  }

  .view-certificate-btn {
    background: linear-gradient(30deg, #202020, #080808);
    color: white;
    font-family: $style7;

  }

  .view-certificate-btn:hover {
  background: transparent !important;
  box-shadow: 0px 0px 10px aqua;
  color: cyan;
  }

  #card-title {
  background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
}

.card-light-mode{
  background: linear-gradient(30deg, #202020, #080808);

  p {
      background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }



  #card-period {
    color: white;
  }

  .view-certificate-btn {
    background: linear-gradient(30deg, #303030, #080808);
    color: cyan;
    font-family: $style7;

  }

  .view-certificate-btn:hover {
  background: transparent !important;
  box-shadow: 0px 0px 10px #080808;
  color: white;
  }

  #card-title {
  background: linear-gradient(30deg, white, aqua);;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
}

.text-dark-mode {

  .cv-p{
  font-weight: bold;
  background: $gradient4;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .cv-p-li {
  font-weight: bold;
  background: $gradient3;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  p {
    color: white;
  }

  h1 {
  color: white;
  }

  li {
    font-size: 12px;
  }

  .cv-h1 {
    font-family: $style4;
    color: white;
    letter-spacing: 5px;
    text-align: center;

  }

  h3 {
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), $gradient1;
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #101010 inset;
  }

  .cv-h3 {
    background: $gradient1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h4 {
    text-shadow: 0px 0px 5px aquamarine;
    color: white;
  }


}

.text-light-mode {

  .cv-p{
  font-weight: bold;
  background: $gradient3;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .cv-p-li {
    color: black;
  }

  p {
    color: #ffffff;
  }

  small {
    color: #202020;
    font-weight: bold;
  }

  h1 {
  color: #202020;
  }

  li {
    font-size: 12px;
     background: #202020;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    
  }

  .cv-h1 {
    font-family: $style4;
    color: #303030;
    letter-spacing: 5px;
    text-align: center;

  }

  h3 {
    background-image: #303030;
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #303030 inset;
  }

  .cv-h3 {
    background: $gradient4;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h4 {
    text-shadow: none;
    color: black;
  }
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


.fadeIn {
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn{
    from {opacity: 0}
    to {opacity: 1}
}
  
  
.view-certificate-btn {
    transition: 0.5s;
}

.cv-cog-icon {
  background: $gradient4;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 15px;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

.learning-now {
  animation: pulse 0.8s ease-in-out infinite alternate-reverse;
}

@keyframes pulse {
  from{opacity: 0.5; color: white; text-shadow: none}
  to{opacity: 1; color: white; text-shadow: 0px 0px 5px cyan}
}


// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #curriculum {
    margin-bottom: 150px;
  }

  #card-title {
  font-family: $style7;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
}

#view-timeline-btn {
  background: url("../assets/img/spaceimg/jupiter.jpg");
  color: white;
  font-size: $large_btn_mobile;
  letter-spacing: 0px;
  text-shadow: 0px 0px 5px black;
  transform: scale(1);
  animation: motion 10s;
  transition: 1s;
  background-position: center;
}

#view-curriculum-btn {
  background: url("../assets/img/spaceimg/saturn.jpg");
  color: white;
  font-size: $large_btn_mobile;
  letter-spacing: 0px;
  text-shadow: 0px 0px 5px black;
  transform: scale(1);
  animation: motion 10s ease;
  transition: 1s;
    background-position: 30% 40%;
}

.cv-icons {
  background: linear-gradient(to right, white, $primary);
  text-shadow: 0px 0px 3px $primary;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes motion {
  from {
    background-position: top;

  }
  to {
    background-position: left;

  }
}


a {
  text-decoration: none;
}


h1 {

  letter-spacing: 15px;
  font-size: $h1_mobile;
  font-family: $style6 !important;
  text-transform: uppercase;

}

li {
  font-size: 12px;
}

.cv-h1 {
  font-family: $style4;
  color: white;
  letter-spacing: 5px;
  text-align: center;

}

h3 {
  display: block;
  padding-bottom: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
  border-radius: 0px 0px 0px 5px;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;

}

.cv-h3 {
  font-family: $style6;
  font-weight: bold;
  font-size: 12px;

}

h4 {
  margin-left: 20px;
  display: block;
  font-size: 16px;

}

.cv-p {
  font-size: 12px;
}

.timeline-logos {
  background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;

}

.cv-check-icon {
    background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 10px;
}

#card-period{
  font-size: 1em;
  padding-top: 20px;
  padding-left: 20px;
}

}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #curriculum {
    margin-bottom: 50px;
  }

  #card-title {
  font-family: $style7;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
}

.view-certificate-btn:hover {
  background: transparent !important;
  box-shadow: 0px 0px 10px aqua;
  color: cyan;
}

#view-timeline-btn {
  background: url("../assets/img/spaceimg/jupiter.jpg");
  color: white;
  font-size: 1em;
  letter-spacing: 10px;
  text-shadow: 0px 0px 5px black;
  transform: scale(1);
  animation: motion 10s;
  transition: 1s;
  background-position: left;
}

#view-curriculum-btn {
  background: url("../assets/img/spaceimg/saturn.jpg");
  background-attachment: fixed;
  color: white;
  font-size: 1em;
  letter-spacing: 10px;
  text-shadow: 0px 0px 5px black;
  transform: scale(1);
  animation: motion 10s ease;
  transition: 1s;
    background-position: left;
}

.cv-icons {
  background: linear-gradient(to right, white, $primary);
  text-shadow: 0px 0px 3px $primary;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes motion {
  from {
    background-position: top;

  }
  to {
    background-position: left;

  }
}


a {
  text-decoration: none;
}

p {

  font-weight: bold;
  font-size: 12px;
}

h1 {
  letter-spacing: 18px;
  font-size: 18px;
  font-family: $style6 !important;
  text-transform: uppercase;

}

li {
  font-size: 12px;
  font-weight: bold;
}

.cv-h1 {
  font-family: $style4;
  letter-spacing: 2px;
  text-align: center;

}

h3 {
  display: block;
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  border-radius: 0px 0px 0px 5px;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
}

.cv-h3 {
  font-family: $style6;
  font-weight: bold;
  font-size: 12px;
}

h4 {
  margin-left: 20px;
  display: block;
  font-size: 16px;
}

.cv-p {
  font-size: 12px;
}

.timeline-logos {
  background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5em;

}

.cv-check-icon {
    background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 5px;
}

#card-period{
  font-size: 1em;
  padding-top: 20px;
  padding-left: 20px;
  color: $tertiary;
}

}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #curriculum {
    margin-bottom: 0px;
  }
  #card-title {
  font-family: $style7;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
}

#view-timeline-btn {
  background: url("../assets/img/spaceimg/jupiter.jpg");
  color: white;
  font-size: 1.5em;
  letter-spacing: 10px;
  text-shadow: 0px 0px 5px black;
  transform: scale(1);
  animation: motion 10s;
  transition: 1s;
  background-position: left;
}

#view-curriculum-btn {
  background: url("../assets/img/spaceimg/saturn.jpg");
  background-attachment: fixed;
  color: white;
  font-size: 1.5em;
  letter-spacing: 10px;
  text-shadow: 0px 0px 5px black;
  transform: scale(1);
  animation: motion 10s ease;
  transition: 1s;
    background-position: left;
}

.cv-icons {
  background: linear-gradient(to right, white, $primary);
  text-shadow: 0px 0px 3px $primary;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes motion {
  from {
    background-position: top;

  }
  to {
    background-position: left;

  }
}


a {
  text-decoration: none;
}

p {
    font-size: 16px;
}

h1 {
  letter-spacing: 25px;
  font-size: 25px;
  font-family: $style6 !important;
  text-transform: uppercase;

}


li {
  font-size: 16px;
}

.cv-h1 {
  font-family: $style4;
  letter-spacing: 5px;
  text-align: center;

}

h3 {
  display: block;
  padding-bottom: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
  border-radius: 0px 0px 0px 5px;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
}

.cv-h3 {
  font-family: $style6;
  font-weight: bold;
  font-size: 15px;
}

h4 {
  margin-left: 50px;
  display: block;
  font-size: 16px;
}

.cv-p {
  font-size: 16px;
}

.timeline-logos {
  background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5em;

}

.cv-check-icon {
    background: $gradient1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 10px;
}

#card-period{
  font-size: 1.5em;
  padding-top: 20px;
  padding-left: 20px;
  color: $tertiary;
}

}



</style>
