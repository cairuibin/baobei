import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menulist: ["按钮", "按钮", "按钮", "按钮", "按钮", "按钮", "按钮"],
    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
