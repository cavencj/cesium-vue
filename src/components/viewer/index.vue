<template>
  <div id="viewer-container" class="viewer-container"></div>
</template>
<script>
const name = 'Viewer'
export default {
  name,
  methods: {
    initViewer() {
      let viewer = new Cesium.Viewer('viewer-container', {
        baseLayerPicker: false,
        animation: false,
        homeButton: false,
        selectionIndicator: false,
        fullscreenButton: false,
        timeline: false,
        geocoder: false
      })
      viewer.cesiumWidget._creditContainer.style.display = 'none'
      global.viewer = viewer
      this.$emit('viewerCompleted', global.viewer)
    }
  },
  mounted() {
    this.initViewer()
  }
}
</script>
<style lang="scss" scoped>
.viewer-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
