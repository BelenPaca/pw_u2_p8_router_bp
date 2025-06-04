import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from'../views/EstudianteView.vue'
import EstudianteTablaView from '@/views/EstudianteTablaView.vue'
import PreguntaView from '@/views/PreguntaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
      {
    path: '/estudianteTabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaView
  },
        {
    path: '/pregunta',
    name: 'preguntaView',
    component: PreguntaView
  },

    {
    path: '/contador/numeros',
    name: 'contadorView',
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/ContadorView.vue')
  },

        {
    path: '/holaMundo',
    name: 'holaMundoViews',
    component: () => import(/* webpackChunkName: "holaMundoViews" */ '../views/HolaMundoViews.vue')
  },
          {
    path: '/biblioteca',
    name: 'bibliotecaView',
    component: () => import(/* webpackChunkName: "bibliotecaView" */ '../views/BibliotecaView.vue')
  },
          {
    path: '/nasa',
    name: 'nasaView',
    component: () => import(/* webpackChunkName: "nasaView" */ '../views/NasaView.vue')
  },
            {
    path: '/pockemon',
    name: 'pockemonView',
    component: () => import(/* webpackChunkName: "pockemonView" */ '../views/PockemonView.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
