<template>
  <div class="col-12">
  	<canvas id="canvas"></canvas>
    <div class="d-flex">
      <button id="startButton" class="btn btn-primary flex-fill">Запустить</button>
      <button id="resetButton" class="btn btn-danger flex-fill ml-1">Сброс</button>
    </div>
  </div>
</template>

<script>
import Pendulum from '../../../static/pendulum.js'
export default {
  name: 'LabCanvas',
  data: function () {
    return {
      canvas: null,
      ctx: null,
      pendulum: null
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.initCanvas()
    })
  },
  methods: {
    initCanvas () {
      this.canvas = document.getElementById('canvas')
      this.ctx = this.canvas.getContext('2d')
      let startButton = document.getElementById('startButton')
      let resetButton = document.getElementById('resetButton')
      this.pendulum = new Pendulum(this.canvas, this.ctx)
      this.pendulum.init(startButton, resetButton)
    }
  }
}
</script>

<style scoped>
  #canvas {
    width: 90%;
  }
</style>
