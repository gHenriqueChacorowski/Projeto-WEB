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
        <form  @submit.prevent="cadastrarCliente">
          <div class="campos">
          <div class="row">
            <div class="form-group col-md-5">
              <label class="control-label" for="tipo">Tipo Cliente</label>
              <select class="form-control" name="tipo" id="tipo" v-model="cliente.tipo">
                  <option value="Bar">Bar</option>
                  <option value="Mercearia">Mercearia</option>
                  <option value="Padaria">Sorveteria</option>
                  <option value="Supermercado">Supermercado</option>
                  <option value="Hamburgueria">Hamburgueria</option>
                  <option value="Padaria">Padaria</option>
                  <option value="Conveniencia">Loja de Conveniência</option>              
              </select>              
            </div>
          </div>        
          <div class="row">
            <div class="form-group col-md-11">
              <label class="control-label" for="nome">Nome</label>
              <input type="text" class="form-control" name="nome" id="nome" v-model="cliente.nome" required />
            </div>            
          </div>
          <div class="row">             
            <div class="form-group col-md-8">
              <label class="control-label" for="endereco">Endereço</label>
              <input type="text" class="form-control" name="endereco" id="endereco" v-model="cliente.endereco" required />
            </div> 
            <div class="form-group col-md-3">
              <label class="control-label" for="numero">Número</label>
              <input type="text" class="form-control" name="numero" id="numero" v-model="cliente.numero" required />
            </div>                  
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label class="control-label" for="bairro">Bairro</label>
              <input type="text" class="form-control" name="bairro" id="bairro" v-model="cliente.bairro" required />
            </div>
            <div class="form-group col-md-5">
              <label class="control-label" for="Cidade">Cidade</label>
              <input type="text" class="form-control" id="cidade" name="cidade" v-model="cliente.cidade" required />
            </div>            
          </div>
          <div class="row">
            <div class="form-group col-md-5">
              <label class="control-label" for="telefone">telefone</label>
              <input type="text" class="form-control" id="telefone" name="telefone" v-mask="masktel" v-model="cliente.telefone" required />
            </div>
            <div class="form-group col-md-3">
              <label class="control-label" for="latitude">Latitude</label>
              <input type="text" class="form-control" id="latitude" name="latitude" v-model="cliente.latitude" required />
            </div>
            <div class="form-group col-md-3">
              <label class="control-label" for="longitude">Longitude</label>
              <input type="text" class="form-control" id="longitude" name="longitude" v-model="cliente.longitude" required />
            </div>          
          </div>            
          <hr>
          <button class="btn btn-primary" type="submit">Cadastrar</button>      
          <router-link :to="{ name: 'navbar' }">Voltar</router-link> 
          </div>      
        </form>    
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
        masktel:"(##) ####-####",
        cliente: {
        tipo: "",
        nome: "",
        endereco: "",
        bairro:"",
        cidade: "",
        telefone: "",
        latitude: "",
        longitude: ""         
      }
    };
  },
  methods: {
    cadastrarCliente() {
      let clientes = localStorage.getItem('clientes');
      if(clientes){
        clientes = JSON.parse(clientes);
        clientes.push(this.cliente);
      }else {
        clientes = [this.cliente];
      }

      localStorage.setItem('clientes', JSON.stringify(clientes));
      this.$router.push({ name: 'navbar' });
    }
  }
};
</script>

<style>
.campos{
margin-left: 10%;
}

.container-cadastro-cliente {
  position: relative;
  display: flex;
  align-items: center;
  
}

.container-cadastro-cliente main{
  margin: 100px 100px 20px 50px;
  padding: 0px;
  width: 80%;
}

.container-cadastro-cliente main h2 {
  font-size: 48px;
  color: #48aec0;
  padding: 2px 0 10px 0;
  text-align: center;
  padding-bottom: 30px;
}

#latitude, #longitude, #numero, #telefone{
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