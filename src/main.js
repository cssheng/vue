import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import './lib/mui/css/mui.min.css'

Vue.use(MintUI)


// 按需导入组件

var vw = new Vue({
    el: "#app",
    render: c => c(App)
})