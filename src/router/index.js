import { createRouter, createWebHistory } from 'vue-router'

// VISTES NIUADES
import SubPaginaA from '@/views/subviews/SubPaginaA.vue'
import SubPaginaB from '@/views/subviews/SubPaginaB.vue'
import SubPaginaC from '@/views/subviews/SubPaginaC.vue'
import SubPaginaD from '@/views/subviews/SubPaginaD.vue'

// VISTES PRINCIPALS
import Pagina1 from '../views/Pagina1.vue'
import Pagina2 from '../views/Pagina2.vue'

// CONFIGURACIÓ DE RUTES
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Pagina1
    },
    {
      path: '/Pagina2',
      name: 'Pagina2',
      component: Pagina2,

          children: [
          {
            path: 'SubPaginaA',
            name: 'SubPaginaA',
            component: SubPaginaA
          },

          {
            path: 'SubPaginaB',
            name: 'SubPaginaB',
            component: SubPaginaB
          },

          {
            path: 'SubPaginaC',
            name: 'SubPaginaC',
            component: SubPaginaC
          },
          
          {
            path: 'SubPaginaD',
            name: 'SubPaginaD',
            component: SubPaginaD
          }
        ]
    },
  ],
})

export default router
