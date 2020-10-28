import TelaLogin from './components/TelaLogin.vue';
import TelaCadastroUsuario from './components/TelaCadastroUsuario';
import TelaCadastroCliente from './components/TelaCadastroCliente';
import Undefined from './components/Undefined';
import NavBar from './components/NavBar';

export const routes = [
    { path: '', name: 'navbar', component: NavBar },
    { path: '/tela-login', name: 'tela-login', component: TelaLogin },
    { path: '/cadastro-usuario', name: 'tela-cadastro-usuario', component: TelaCadastroUsuario },
    { path: '/cadastro-cliente', name: 'tela-cadastro-cliente', component: TelaCadastroCliente },
    { path: '/undefined', name: 'undefined', component: Undefined }
];