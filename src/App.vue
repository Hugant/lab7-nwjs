<template>
  <div id="app">
    <transition name="fade" appear  mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      name: '',
      group: '',
      protocol: [],
      datas: []
    }
  },
  mounted () {
    this.datas[0] = {
      weight: 0.260,
      maxSpeed: 0.190,
      minSpeed: 0.145,
      used: false,
      img: '../../static/ring1.svg',
      t: []
    }
    this.datas[1] = {
      weight: 0.410,
      maxSpeed: 0.244,
      minSpeed: 0.172,
      used: false,
      img: '../../static/ring2.svg',
      t: []
    }
    this.datas[2] = {
      weight: 0.630,
      maxSpeed: 0.300,
      minSpeed: 0.260,
      used: false,
      img: '../../static/ring3.svg',
      t: []
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        this.datas[i].t[j] = Math.random() * (this.datas[i].maxSpeed - this.datas[i].minSpeed) + this.datas[i].minSpeed
        this.datas[i].t[j] = Number(this.datas[i].t[j].toFixed(3))
        this.datas[i].t[j] = (0.4 / this.datas[i].t[j]).toFixed(3)
      }
    }
    console.log(this.datas)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.card {
  transition: all 0.5s;
}
.card-enter, .card-leave-to
/* .card-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.card-enter-to {
  opacity: 1;
  transform: scale(1);
}
.card-leave-active {
  /*position: absolute;*/
}
.card-move {
  opacity: 1;
  transition: all 0.5s;
}
</style>
