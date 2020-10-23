import TelaLogin from './components/TelaLogin.vue';
import TelaCadastroUsuario from './components/TelaCadastroUsuario';
import TelaCadastroCliente from './components/TelaCadastroCliente';
import Undefined from './components/Undefined';

export const routes = [
    { path: '', name: 'tela-login', component: TelaLogin },
    { path: '/cadastro-usuario', name: 'tela-cadastro-usuario', component: TelaCadastroUsuario },
    { path: '/cadastro-cliente', name: 'tela-cadastro-cliente', component: TelaCadastroCliente },
    { path: '/undefined', name: 'tela-undefined', component: Undefined }
];