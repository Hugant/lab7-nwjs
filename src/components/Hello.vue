<template>
  <div class="container" style="height: 100vh">
    <div class="row h-100 justify-content-center">
      <div class="col-sm-8 col-12 my-auto">
        <form v-on:submit.prevent="addNewUser">
          <div class="form-group">
            <label for="exampleInputEmail1"><strong>ФИО</strong></label>
            <input type="text" class="form-control" placeholder="Введите ФИО" v-model="addName" required>
            <small id="emailHelp" class="form-text text-muted">Требуется для протокола</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><strong>Группа</strong></label>
            <input type="text" class="form-control" placeholder="Введите название группы" v-model="addGroup" required>
          </div>
          <button type="submit" class="btn btn-success col-12">Начать работу</button>
        </form>
        <div class="row mt-2">
          <div class="col-6">
            <button class="btn btn-primary w-100" @click='openFile()'>Открыть протокол</button>
            <input type="file" id='openfile' accept=".lab" style="display: none">
          </div>
          <div class="col-6">
            <a href="#" @click="exit()" class="btn btn-danger w-100">Выход</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gui from 'nw.gui'
export default {
  name: 'hello',
  data: function () {
    return {
      addGroup: '',
      addName: ''
    }
  },
  methods: {
    addNewUser: function () {
      this.$parent.name = this.addName
      this.$parent.group = this.addGroup
      console.log('Фио ' + this.$parent.name + ', Группа ' + this.$parent.group)
      this.$router.push('Lab')
    },
    exit: function () {
      gui.App.quit()
    },
    openFile: function () {
      let fs = require('fs')
      let self = this
      let chooser = document.querySelector('#openfile')
      chooser.click()
      chooser.addEventListener('change', function (evt) {
        // console.log(fs.readFileSync(this.value, 'utf-8'))
        self.openProtocol(JSON.parse(fs.readFileSync(this.value, 'utf8').toString()))
      })
    },
    openProtocol: function (data) {
      this.$parent.protocol = data
      this.$router.push('Protocol')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
