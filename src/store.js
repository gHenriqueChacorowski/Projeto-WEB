import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: {}
    },
    mutations: {
        DEFINIR_USUARIO_LOGADO(state, { token, user }){
            state.token = token,
            state.user = user
        },
        DESLOGAR_USUARIO(state){
            state.token = null,
            state.user = {}
        }
    }
});