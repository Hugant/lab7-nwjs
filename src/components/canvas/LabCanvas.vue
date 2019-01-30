<template>
	<canvas id="pendulum"></canvas>
</template>

<script>
export default {
  name: 'LabCanvas',
  data: function () {
    return {
      data: {} // Данные по выбранной соли
    }
  },
  mounted: function () {
    let animationStart = Date.now()
    let currentTime = 0
    let realCurrentTime = 0
    let end = false
    let canvas = document.getElementById('pendulum')
    let ctx = canvas.getContext('2d')
    canvas.width = 250
    canvas.height = 400
    ctx.lineWidth = 2
    ctx.strokeRect(10, 380, 200, 10)
    ctx.strokeRect(15, 390, 10, 10)
    ctx.strokeRect(195, 390, 10, 10)
    ctx.strokeRect(35, 390, 30, 5)
    ctx.strokeRect(35, 375, 30, 5)
    ctx.strokeRect(40, 40, 20, 335)
    ctx.strokeRect(30, 35, 165, 5)
    ctx.strokeRect(145, 40, 10, 5)
    ctx.strokeRect(145, 30, 10, 5)
    ctx.strokeRect(125, 40, 12, 5)
    ctx.strokeRect(163, 40, 12, 5)
    ctx.beginPath()
    ctx.moveTo(127, 45)
    ctx.lineTo(127, 55)
    ctx.lineTo(135, 50)
    ctx.lineTo(135, 45)
    ctx.moveTo(173, 45)
    ctx.lineTo(173, 55)
    ctx.lineTo(165, 50)
    ctx.lineTo(165, 45)
    ctx.stroke()
    ctx.closePath()
    ctx.strokeRect(80, 330, 100, 50)
    ctx.strokeRect(90, 340, 80, 30)
    ctx.beginPath()
    for (let i = 0; i < 241; i += 3) {
      if ((i / 3) % 5 === 0) {
        ctx.moveTo(60, 70 + i)
        ctx.lineTo(50, 70 + i)
      } else {
        ctx.moveTo(60, 70 + i)
        ctx.lineTo(55, 70 + i)
      }
    }
    ctx.stroke()
    ctx.closePath()
    ctx.font = 'bold 14pt Arial'
    if (!end) {
      if (Date.now() - animationStart) {
        if (Date.now() - animationStart < currentTime * 1000) {
          ctx.fillText((Date.now() - animationStart) / 1000 + 's', 100, 362)
        } else {
          ctx.fillText(currentTime + 's', 100, 362)
        }
      } else {
        ctx.fillText('0s', 100, 362)
      }
    } else {
      ctx.fillText(realCurrentTime + 's', 100, 362)
    }
    console.log(ctx)
  }
}
</script>

<style scoped>
  #canvas {
    width: 100%;
  }
</style>
