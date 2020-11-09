<template>
  <div id="tela">
    <Aside />
    <main>
      <div id="container">
        <form id="form-login" @submit.prevent="cadastrarUsuario">
          <h2>Cadastro Usuário</h2>
          <input type="text" placeholder="Nome" v-model="usuario.nome" required />
          <input type="email" placeholder="Email" v-model="usuario.email" required />
          <input type="password" placeholder="Senha" v-model="usuario.senha" required />
          <button type="submit">Cadastrar</button>
          <router-link :to="{ name: 'tela-login' }">Já é cadastrado?</router-link>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import Aside from "./Aside.vue";
export default {
  data() {
    return {
      usuario: {
        nome: "",
        senha: "",
        email: ""
      },
    };
  },
  methods: {
    cadastrarUsuario() {
      let usuarios = localStorage.getItem('usuarios');
      if(usuarios){
        usuarios = JSON.parse(usuarios);
        usuarios.push(this.usuario);
      }else {
        usuarios = [this.usuario];
      }

      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.$router.push({ name: 'tela-login'});
    },
  },
  components: {
    Aside
  },
};
</script>

<style>
#container {
  display: flex;
  padding-left: 50px;
  width: 500px;
  min-height: 560px;
  margin: 0px auto;
  position: relative;
}

#container #form-login h2 {
  font-size: 48px;
  color: #48aec0;
  padding: 2px 0 10px 0;
  text-align: center;
  padding-bottom: 30px;
}

#container #form-login button {
  width: 100% !important;
  cursor: pointer;
  background: #3d9db3;
  padding: 8px 10px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  margin-top: 5px;
  margin-bottom: 15px;
  text-shadow: 0 1px 1px #333;

  -webkit-border-radius: 5px;
  border-radius: 5px;

  transition: all 0.2s linear;
}

#container #form-login h2:after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background: -webkit-linear-gradient(
    left,
    rgba(147, 184, 189, 0) 0%,
    rgba(147, 184, 189, 0.8) 20%,
    rgba(147, 184, 189, 1) 53%,
    rgba(147, 184, 189, 0.8) 79%,
    rgba(147, 184, 189, 0) 100%
  );
  background: linear-gradient(
    left,
    rgba(147, 184, 189, 0) 0%,
    rgba(147, 184, 189, 0.8) 20%,
    rgba(147, 184, 189, 1) 53%,
    rgba(147, 184, 189, 0.8) 79%,
    rgba(147, 184, 189, 0) 100%
  );
}

#container #form-login input {
  outline: none;
  margin: 0px;
}

#container #form-login input:not([type="checkbox"]) {
  width: 100%;
  margin-top: 4px;
  padding: 10px;
  border: 1px solid #b2b2b2;

  -webkit-border-radius: 3px;
  border-radius: 3px;

  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
</style>