import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkshopsView from '../views/WorkshopsView.vue'
import TrainingsView from '../views/TrainingsView.vue'
import HowItWorksView from '../views/HowItWorksView.vue'
import FitCheckView from '../views/FitCheckView.vue'
import AboutView from '../views/AboutView.vue'
import KnowledgeView from '../views/KnowledgeView.vue'
import QuizView from '../views/QuizView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/warsztaty', name: 'workshops', component: WorkshopsView },
  { path: '/szkolenia', name: 'trainings', component: TrainingsView },
  { path: '/jak-to-dziala', name: 'how', component: HowItWorksView },
  { path: '/sprawdz', name: 'fit', component: FitCheckView },
  { path: '/o-nas', name: 'about', component: AboutView },
  { path: '/wiedza', name: 'knowledge', component: KnowledgeView },
  { path: '/dobierz-gre', name: 'quiz', component: QuizView },
  { path: '/kontakt', name: 'contact', component: ContactView }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})
