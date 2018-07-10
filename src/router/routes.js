import ShowToday from '@/views/ShowToday.vue'
import ShowNext from '@/views/ShowNext.vue'

const routes = [
  {
    path: '/',
    component: ShowToday
  },
  {
    path: '/next',
    component: ShowNext
  }
]

export default routes