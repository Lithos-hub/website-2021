import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    sound: false,
    lights: true,
  },
  mutations: {
    setSound(state, payload){
      state.sound = payload
    },
    setLights(state, payload) {
      state.lights = payload
    }
  },
  actions: {
    soundToggle({commit}) {
      commit("setSound", !this.state.sound)
      if(this.state.sound === true){
          const audio = document.getElementById("soundtrack");
          audio.play();
      }else{
          const audio = document.getElementById("soundtrack");
          audio.pause();
      }
    },
    lightsToggle({commit}){
      commit("setLights", !this.state.lights)
    }
  },
  modules: {
  }
})
