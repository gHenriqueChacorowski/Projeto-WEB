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
        <form>
          <div class="row">
            <div class="form-group col-md-12">
              <gmap-map :center="center" :zoom="16" style="width: 100%; height: 250px" @click="addMarker">
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  @click="toggleInfoWindow(m)"
                ></gmap-marker>
              </gmap-map>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label class="control-label" for="nome">Nome</label>
              <input type="text" class="form-control" name="nome" id="nome" v-model="cliente.nome" required />
            </div>
            <div class="form-group col-md-5">
              <label class="control-label" for="tipo">Tipo Cliente</label>
              <input type="text" class="form-control" id="tipo" name="tipo" v-model="cliente.tipo" required />
            </div>
            <div class="form-group col-md-1">
              <input type="text" class="form-control invisible" name="position" id="position" v-model="cliente.position" required />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-4">
              <label class="control-label" for="telefone">Telefone</label>
              <input type="text" class="form-control" id="telefone" name="telefone" v-model="cliente.telefone" required />
            </div>
            <div class="form-group col-md-4">
              <label class="control-label" for="endereco">Endereço</label>
              <input type="text" class="form-control" name="endereco" id="endereco" v-model="cliente.endereco" required />
            </div>
            <div class="form-group col-md-4">
              <button class="btn btn-primary meio" type="submit" @click="mostrarNoMapa">Mostrar no mapa</button>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label class="control-label" for="cidade">Cidade</label>
              <input type="text" class="form-control" name="cidade" id="cidade" v-model="cliente.cidade" required>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label" for="bairro">Bairro</label>
              <input type="text" class="form-control" name="bairro" id="bairro" v-model="cliente.bairro" required>
            </div>
          </div>

          <hr>

          <button v-if="this.cliente.position" class="btn btn-primary" type="submit" @click.prevent="cadastrarCliente">Cadastrar</button>      
          <router-link :to="{ name: 'navbar' }">Voltar</router-link>     
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
      center: { lat: -23.9145863, lng: -52.3466818 },
      markers: [],
      cliente: {
        position: "",
        nome: "",
        tipo: "",
        endereco: "",
        telefone: "",
        cidade: "",
        bairro: ""
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
    },
    mostrarNoMapa() {
      this.markers = [];
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': this.cliente.endereco + this.cliente.cidade + this.cliente.bairro }, (results, status) => {
      if (status === 'OK') {
        this.center = results[0].geometry.location;
        this.cliente.position = results[0].geometry.location;
        this.markers.push( { position: results[0].geometry.location })
      }else {
        alert('Geocode não achou nenhum resultado');
      }
    });
    }
  }
};
</script>

<style>
.container-cadastro-cliente {
  position: relative;
  display: flex;
}

.container-cadastro-cliente main{
  margin: 20px 100px 20px 50px;
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

.meio{
  margin-top: 35px;
}
</style>