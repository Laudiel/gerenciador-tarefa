import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tarefas from '@/pages/Tarefas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // define a rota que deve ser acessada pelo browser
      name: 'HelloWorld', //da o nome da rota
      component: HelloWorld //componente que deve ser "injetado" na página
    },
    {
      path: '/tarefas', // define a rota que deve ser acessada pelo browser
      name: 'Tarefas', //da o nome da rota
      component: Tarefas //componente que deve ser "injetado" na página
    }
  ]
})
