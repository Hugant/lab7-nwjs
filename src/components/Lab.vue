<template>
  <section class="pt-3">
    <div class="container-fluid">
      <div class="row px-3">
        <div class="col-12 col-md-4">
          <div class="row">
            <div class="col-12">
              <h5 class="text-center">Прибор FРM-03</h5>
            </div>
            <div class="col-12">
              <LabCanvas></LabCanvas>
            </div>
            <!-- TODO -->
            <!-- Допилить функции которые буду блочить 
              кнопки и прокидывать данные соли -->
            <!-- Кнопки выбора солей -->
            <div class="col-12 d-flex flex-wrap">
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="row">
            <div class="col-12 row col-text p-0 m-0">
              <div class="custom-table col-xs-6 col-sm-8">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="">
                        № Измерения
                      </th>
                      <th scope="">
                        t, с
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td class="form-group">
                        <input type="text" name="t1" id="t1" class="form-control" placeholder='Введите t1'>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">2</td>
                      <td class="form-group">
                        <input type="text" name="t2" class="form-control" placeholder="Введите t2" id="t2">
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">3</td>
                      <td class="form-group">
                        <input type="text" name="t3" class="form-control" placeholder="Введите t3" id="t3">
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">4</td>
                      <td class="form-group">
                        <input type="text" name="t4" class="form-control" placeholder="Введите t4" id="t4">
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">5</td>
                      <td class="form-group">
                        <input type="text" name="t5" class="form-control" placeholder="Введите t5" id="t5">
                      </td>
                    </tr>
                    <tr>
                      <td>t<sub>cp</sub></td>
                      <td class="form-group">
                        <input type="text" name="tcp" class="form-control" placeholder="Введите tcp" id="tcp">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-xs-6 col-sm-4">
                <h2 class="text-center">Дано</h2>
                <ol>
                  <li>h = 0.4 м</li>
                  <li>g = 9.80665 м/с <sup>2</sup></li>
                  <li>D = 0.01 м</li>
                </ol>
              </div>
              <div class="ml-3 d-flex flex-wrap">
                <button class="btn btn-primary flex-fill mr-1 mt-1" data-toggle="modal" data-target=".bd-example-modal-lg">Открыть теорию</button>
                <!-- <button class="btn btn-danger" @click="undisableButtons()">Undis But</button> -->
                <button class="btn btn-success flex-fill mr-1 mt-1" @click="checkAnswer()">Проверка результатов</button>
                <button class="btn btn-primary flex-fill mt-1" @click="saveProtocol()" >Сохранить протокол</button>
                <input type="file" nwsaveas="lab52" hidden id="savefile" accept=".lab"/>
              </div>
            </div>
            <div class="col-12" style="border-left: 2px solid #d8d8d8; height: 70vh; overflow-x: hidden; overflow-y: auto">
              <h3 class="text-center pt-3">
                <strong>Алгоритм пользования программой</strong>
              </h3>
              <ol>
                <li> Перед тем, как приступить к выполнению лабораторной работы - в обязательном порядке ознакомьтесь с теоритическим материалом, нажав кнопку "Открыть теорию".</li>
                <li> Следующим шагом необходимо выбрать одно из предоставленных колец, которое будет установлено на маятнике Максвелла.</li>
                <li> Затем проведите 5 опытов подряд, запуская установку клавишей "Пуск". Результаты каждого опыта необходимо зафиксировать в таблицу. Внимание! Каждое значение необходимои записать в таком виде, в котором оно предоставляется на установке, вплоть до 3-ех знаков после точки (разделяющий символом между целой частью и дробной в числе является точка).</li>
                <li> Далее необходимо подсчитать среднее значение времени
                  (T<sub>cp</sub>), и расчитать момент инерции J.</li>
                <li> По завершении всех подсчетов нажмите кнопку "Проверка".
                  В случае, если все подсчеты верны (помечены зеленой
                  галочкой), приступайте к дальшнейшему выполнению лабораторной работы, выбрав кольцо другой массы и повторив шаги 2-4.
                  .</li>
                <li> После выполнения всех опытов (всего их должно быть 15, по 5 с разными
                 кольцами) вы сможете сохранить протокол нажав кнопку
                  "Сохранить".  </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Методичка в окне -->
    <Met></Met>
  </section>
</template>

<script>
import Met from './Met.vue'
import LabCanvas from './canvas/LabCanvas.vue'
export default {
  name: 'lab',
  data: function () {
    return {
      data: {} // Данные по выбранной соли
    }
  },
  components: {
    Met,
    LabCanvas
  }
}
</script>
