import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        mainColor: "orange"
    },
    getters :{
        mainColor : state => {
            return state.mainColor
        }
    },
    mutations: {
        mainColor (state, color) {
            state.mainColor = color
        }
    }
})

export default store