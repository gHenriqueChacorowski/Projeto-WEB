<template>
  <div>
    <div class="container">
      <h4>Filtro</h4>
      <form @submit.prevent="filtrar">
        <select v-model="tipoFiltro">
          <option disabled value="">Escolha um item</option>
          <option>Nome</option>
          <option>Tipo Cliente</option>
          <option>Endereco</option>
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
      infoContent: "",
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
  created(){
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    clientes.forEach(element => {
      const marker = element.position
      const nome = element.nome
      const tipo = element.tipo
      const endereco = element.endereco
      const telefone = element.telefone

      this.markers.push( { position: marker, nome, tipo, endereco, telefone });      
    })
  },
  methods: {
    filtrar(){
      let clientes = JSON.parse(localStorage.getItem('clientes'));
      this.markers = [];
      let tipo = "";
      clientes.forEach(element => {
        switch(this.tipoFiltro){
          case 'Tipo Cliente':
            tipo = element.tipo;
          break;
          case 'Nome':
            tipo = element.nome;
          break;
          case 'Endereco':
            tipo = element.endereco
          break;
        }
        if(this.filtro == tipo){
          const marker = element.position
          const nome = element.nome
          const tipo = element.tipo
          const endereco = element.endereco
          const telefone = element.telefone
          this.center = marker;
          this.markers.push( { position: marker, nome, tipo, endereco, telefone });
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
        `<div>
          <p class="markermapa">
            <span class="bold">${marker.nome}</span> <br>
            ${marker.endereco} <br>
            Peabiru - PR <br>
            87250-000 <br>
            Brasil
          </p>
        </div>`
      );
    }
  }
}

</script>

<style>
.markermapa{
  width: 180px;
  height: 90px;
  font-size: 14px;
}

.bold{
  font-weight: bold;
}
</style>