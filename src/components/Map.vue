<template>
  <div>
    <form action=""></form>
    <div class="navbar">
      <div class="row">       
        <div class="form-group col-md-5">
          <h4>Mapeamento de Clientes</h4>
        </div>
        <div class="form-group col-md-3">
          <select class="form-control" v-model="tipoFiltro">
            <option disabled value="">Escolha um item para filtrar</option>
            <option>Nome</option>
            <option>Tipo Cliente</option>
            <option>Endereco</option>
            <option>Cidade</option>
            <option>Bairro</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <input
            type="text"
            name="filtro"
            class="form-control"
            id="filtro"
            v-model="filtro"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-4">
          <select class="form-control" v-model="tipoFiltro2">
            <option disabled value="">Escolha um item para filtrar</option>
            <option>Nome</option>
            <option>Tipo Cliente</option>
            <option>Endereco</option>
            <option>Cidade</option>
            <option>Bairro</option>
          </select>
        </div>
        <div class="form-group col-md-5">
          <input
            type="text"
            name="filtro"
            class="form-control"
            id="filtro"
            v-model="filtro2"
            required
          />
        </div>
        <div class="form-group col-md-3">
          <button
            class="btn btn-primary"
            v-on:click.prevent="filtrar"
            type="submit"
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <gmap-map :center="center" :zoom="16" style="width: 100%; height: 700px">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          @click="toggleInfoWindow(m)"
        ></gmap-marker>

        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPosition"
          :opened="windowOpen"
          @closeclick="windowOpen = false"
        >
          <div v-html="infoContent"></div>
        </gmap-info-window>
      </gmap-map>
    </div>
    
    <router-link id="voltar" class="h1 border" to="/">Voltar</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -23.9145863, lng: -52.3466818 },
      markers: [],
      infoWindowPosition: null,
      windowOpen: false,
      infoContent: "",
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -30,
        },
      },
      tipoFiltro: "",
      tipoFiltro2: "",
      filtro: "",
      filtro2: ""
    };
  },
  created() {
    let clientes = JSON.parse(localStorage.getItem("clientes"));
    clientes.forEach((element) => {
      const marker = element.position;
      const nome = element.nome;
      const tipo = element.tipo;
      const endereco = element.endereco;
      const telefone = element.telefone;
      const cidade = element.cidade;
      const bairro = element.bairro;

      this.markers.push({
        position: marker,
        nome,
        tipo,
        endereco,
        telefone,
        cidade,
        bairro,
      });
    });
  },
  methods: {
    filtrar() {
      let clientes = JSON.parse(localStorage.getItem("clientes"));
      this.markers = [];
      let tipo = "";
      let tipo2 = "";
      if(this.tipoFiltro && this.filtro){
        clientes.forEach((element) => {
          switch (this.tipoFiltro) {
            case "Tipo Cliente":
              tipo = element.tipo;
              break;
            case "Nome":
              tipo = element.nome;
              break;
            case "Endereco":
              tipo = element.endereco;
              break;
            case "Cidade":
              tipo = element.cidade;
              break;
            case "Bairro":
              tipo = element.bairro;
              break;
          }
          if (this.filtro.toUpperCase() == tipo.toUpperCase()) {
            if(this.tipoFiltro2 && this.filtro2){
              switch (this.tipoFiltro2) {
                case "Tipo Cliente":
                  tipo2 = element.tipo;
                  break;
                case "Nome":
                  tipo2 = element.nome;
                  break;
                case "Endereco":
                  tipo2 = element.endereco;
                  break;
                case "Cidade":
                  tipo2 = element.cidade;
                  break;
                case "Bairro":
                  tipo2 = element.bairro;
                  break;
              }
              if(this.filtro2.toUpperCase() == tipo2.toUpperCase()){
                const marker = element.position;
                const nome = element.nome;
                const tipo = element.tipo;
                const endereco = element.endereco;
                const telefone = element.telefone;
                const cidade = element.cidade;
                const bairro = element.bairro;
    
                this.markers.push({
                  position: marker,
                  nome,
                  tipo,
                  endereco,
                  telefone,
                  cidade,
                  bairro,
                });
              }
            } else {
                const marker = element.position;
                const nome = element.nome;
                const tipo = element.tipo;
                const endereco = element.endereco;
                const telefone = element.telefone;
                const cidade = element.cidade;
                const bairro = element.bairro;
    
                this.markers.push({
                  position: marker,
                  nome,
                  tipo,
                  endereco,
                  telefone,
                  cidade,
                  bairro,
                });
            }
          }
        });
      }
    },
    toggleInfoWindow(marker) {
      this.windowOpen = true;
      this.infoWindowPosition = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);
    },
    getInfoWindowContent(marker) {
      return `<div>
          <p class="markermapa">
            <span class="bold">${marker.nome}</span> <br>
            ${marker.endereco} <br>
            ${marker.bairro} <br>
            ${marker.cidade} <br>
            ${marker.telefone}
          </p>
        </div>`;
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  background: #48aec0;
  align-items: center;
  height: 55px;
}

.markermapa {
  width: 180px;
  height: 90px;
  font-size: 14px;
}

.bold {
  font-weight: bold;
}

.container {
  margin: 5px -5px 5px 70px;
  border: 2px solid;
  padding: 10px;
  border-color: chocolate;
}
#voltar{
  margin-left: 70px;
}
</style>