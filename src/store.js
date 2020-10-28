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
    },
    actions: {
        efetuarLogin({ commit },token, user) {
            return commit('DEFINIR_USUARIO_LOGADO', {
                token: token,
                user: user
            });
        }
    },
    getters: {
        usuarioLogado: state => Boolean(state.token)
    }
});