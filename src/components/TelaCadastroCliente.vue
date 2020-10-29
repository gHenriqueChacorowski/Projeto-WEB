<template>
  <div class="container-cadastro-cliente">
    <Aside />
    <main>
      <fieldset>
        <div class="row">
          <div class="col-md-12">
            <h2>Cadastro Cliente</h2>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label class="control-label" for="tipoCliente">Tipo Cliente</label>
            <select class="form-control chosen-select" id="tipoCliente" name="tipoCliente">
              <option value="">Selecione</option>
              <option value="Bar">Bar</option>
              <option value="Sorveteria">Sorveteria</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-8">
            <label class="control-label" for="razaoSocial">Razão Social</label>
            <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" required />
          </div>
          <div class="form-group col-md-4">
            <label class="control-label" for="cnpj">CNPJ</label>
            <input type="mask" class="form-control" id="cnpj" name="cnpj" v-mask="maskcnpj" v-model="cnpj" required />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-7">
            <label class="control-label" for="logradouro">Logradouro</label>
            <input type="text" class="form-control" id="logradouro" name="logradouro" required />
          </div>
          <div class="form-group col-md-2">
            <label class="control-label" for="numero">Número</label>
            <input type="text" class="form-control" id="numero" name="numero" required />
          </div>
          <div class="form-group col-md-3">
            <label class="control-label" for="bairro">Bairro</label>
            <input type="text" class="form-control" name="bairro" id="bairro" required />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-3">
            <label class="control-label" for="cep">CEP</label>
            <input type="text" class="form-control" id="cep" name="cep" v-mask="maskcep" v-model="cep" required />
          </div>
          <div class="form-group col-md-7">
            <label class="control-label" for="cidade">Cidade</label>
            <input type="text" class="form-control" id="cidade" name="cidade" required />
          </div>
          <div class="form-group col-md-2">
            <label class="control-label" for="estado">Estado</label>
            <input type="text" class="form-control" id="estado" name="estado" required placeholder="ES" />
          </div>
        </div>

        <hr>

        <button class="btn btn-primary" type="submit">Cadastrar</button>
        <router-link :to="{ name: 'navbar' }">Voltar</router-link>
      
      </fieldset>  
    </main>
  </div>
</template>

<script>
import Aside from "./Aside.vue";
export default {
  components: {
    Aside,
  },
  data() {
    return {
      maskcnpj: "##.###.###/####-##",
      cnpj: "",
      maskcep: "#####-###",
      cep: "",
    };
  },
};
</script>

<style scoped>
.container-cadastro-cliente {
  position: relative;
  display: flex;
}

.container-cadastro-cliente main{
  margin: 100px 100px 20px 50px;
  padding: 0px;
}

.container-cadastro-cliente main h2 {
  font-size: 48px;
  color: #48aec0;
  padding: 2px 0 10px 0;
  text-align: center;
  padding-bottom: 30px;
}

#cep, #numero, #cnpj{
  text-align: right;
}

.container-cadastro-cliente h2:after {
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

.container-cadastro-cliente main input:not([type="checkbox"]) {
  width: 100%;
  margin-top: 4px;
  padding: 10px;
  border: 1px solid #b2b2b2;

  -webkit-border-radius: 3px;
  border-radius: 3px;

  -webkit-box-shadow: 0px 1px 4px 0px rgba(12, 8, 8, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
</style>