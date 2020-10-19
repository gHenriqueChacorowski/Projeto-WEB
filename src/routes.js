import TelaLogin from './components/TelaLogin.vue';
import TelaCadastro from './components/TelaCadastro';

export const routes = [
    { path: '', name: 'tela-login', component: TelaLogin },
    { path: '/cadastro', name: 'tela-cadastro', component: TelaCadastro }
];