<template>
  <div class="hello">
    <a-scene background="color: #ECECEC" debug="true" vr-mode-ui>

      <!-- Meshes -->
      <a-cone shadow position="-1 0.5 -3" rotation="0 45 0" color="white" radius-bottom="0.3"></a-cone>
      <a-sphere shadow position="0 1.25 -5" radius="1.25" color="#222"></a-sphere>
      <a-cylinder shadow position="1 0.75 -3" radius="0.5" height="1.5" color="#AAA"></a-cylinder>
      <a-plane shadow position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#033778"></a-plane>

      <!-- Texts -->
      <a-entity position="2.1 4 -4" :text="'color: #033778; width: 9; value: ' + message"></a-entity>
      <a-entity position="0.3 3 -4" :text="textProperties"></a-entity>

    </a-scene>
    <input type="text" v-model="message" class="input input-text">
    <input type="range" v-model="width" class="input input-range" min="1" max="10" step="0.1">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    message: 'Hello Vue + AFrame @ERNI!',
    brandColor: '#033778',
    width: 9,
  }),
  computed: {
    textProperties() {
      return `
        color: ${ this.brandColor };
        width: ${ this.width };
        align: center;
        wrapCount: 46.6;
        value: ${ this.message } + with computed properties;
      `
    }
  }
}
</script>

<style scoped>
.input {
  position: absolute;
  left: 4px;
  z-index: 2;
  width: 300px;
}
.input-text {
  top: 2.4em;
  width: 300px;
  font-size: 16px;
  color: #033778;
  background-color: azure;
  font-weight: bold;
  padding: 5px 10px;
  border: none;
}
.input-range {
  top: 6em;
}
</style>
