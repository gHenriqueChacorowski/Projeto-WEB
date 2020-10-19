<template>
  <div id="tela">
    <meu-aside></meu-aside>
    <main>
      <div id="container">
        <form id="form-login">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
          <router-link to="/cadastro">Não é cadastrado?</router-link>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import Aside from './Aside.vue';
export default {
    components: {
        'meu-aside' : Aside
    }
};
</script>

<style>
#container {
  padding-left: 50px;
  width: 500px;
  min-height: 560px;
  margin: 0px auto;
  position: relative;
}

#container #form-login h2{
  font-size: 48px;
  color: #48aec0;
  padding: 2px 0 10px 0;
  text-align: center;
  padding-bottom: 30px;
}

#container #form-login button{
  width: 100%!important;
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
  margin: 5px;
}

#container #form-login input:not([type="checkbox"]) {
  width: 95%;
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