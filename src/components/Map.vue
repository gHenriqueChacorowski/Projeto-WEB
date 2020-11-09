<template>
  <div>
    <gmap-map :center="center" :zoom="16" style="width: 100%; height: 700px">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>

    <router-link class="h1 border" to="/" >Voltar</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -23.9145863, lng: -52.3466818 },
      markers: []
    };
  },
  created() {
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    clientes.forEach(element => {
      const marker = {
        lat: JSON.parse(element.latitude),
        lng: JSON.parse(element.longitude)
      }
      this.markers.push( { position: marker });
    });
  }
}

</script>

<style>
</style>