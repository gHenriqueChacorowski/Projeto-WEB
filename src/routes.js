import TelaLogin from './components/TelaLogin.vue';
import TelaCadastro from './components/TelaCadastro';
import Undefined from './components/Undefined';

export const routes = [
    { path: '', name: 'tela-login', component: TelaLogin },
    { path: '/cadastro', name: 'tela-cadastro', component: TelaCadastro },
    { path: '/undefined', name: 'tela-undefined', component: Undefined }
];