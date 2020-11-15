<template>
  <div>
    <div class="container">
      <h4>Filtro</h4>
      <form @submit.prevent="filtrar">
        <select v-model="tipoFiltro">
          <option disabled value="">Escolha um item</option>
          <option>Nome</option>
          <option>Tipo Cliente</option>
        </select>
        <input type="text" name="filtro" id="filtro" v-model="filtro" required />
        <button class="btn btn-primary" type="submit">
          Filtrar
        </button>
      </form>
    </div>
    <gmap-map :center="center" :zoom="16" style="width: 100%; height: 600px">
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

    <router-link class="h1 border" to="/">Voltar</router-link>
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
      infoOptions: {
        pixelOffset:{
          width: 0,
          height: -30
        }
      },
      tipoFiltro: "",
      filtro: "",
    };
  },
  methods: {
    filtrar(){
      let clientes = JSON.parse(localStorage.getItem('clientes'));
      this.markers = [];
      clientes.forEach(element => {
        switch(this.tipoFiltro){
          case 'Tipo Cliente':
            if(this.filtro == element.tipo){
              const marker = {
                lat: JSON.parse(element.latitude),
                lng: JSON.parse(element.longitude)
              }
              const nome = element.nome
              const tipo = element.tipo
              const endereco = element.endereco
              const telefone = element.telefone

              this.markers.push( { position: marker, nome, tipo, endereco, telefone });
            }
          break;
          case 'Nome':
            if(this.filtro == element.nome){
              const marker = {
                lat: JSON.parse(element.latitude),
                lng: JSON.parse(element.longitude)
              }
              const nome = element.nome
              const tipo = element.tipo
              const endereco = element.endereco
              const telefone = element.telefone

              this.markers.push( { position: marker, nome, tipo, endereco, telefone });
            }
          break;
        }         
      });
    },
    toggleInfoWindow(marker) {
      this.windowOpen = true;
      this.infoWindowPosition = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);
    },
    getInfoWindowContent(marker) {
      return (
        `<div class="infowindow">
          <div>
            <div class="m-2"><span style="font-weight: bold;">Nome: </span>
              ${marker.nome}
            </div>
            <div class="m-2"><span style="font-weight: bold;">Tipo: </span>
              ${marker.tipo}
            </div>
            <div class="m-2"><span style="font-weight: bold;">Endereco: </span>
              ${marker.endereco}
            </div>
            <div class="m-2" v-if="marker.telefone"><span style="font-weight: bold;">Telefone: </span>
              ${marker.telefone} 
            </div>     
          </div>
        </div>`
      );
    }, 
  }
}

</script>

<style>
.infowindow {
}
</style>