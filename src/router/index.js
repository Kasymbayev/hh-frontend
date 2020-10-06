import Vue from "vue";
import VueRouter from "vue-router";
import mainComponent from '../views/main-component'
import vacancyComponent from '../views/vacancy-component'
import resumeComponent from '../views/resume-component'
import employerComponent from '../views/employers-component'
import detailVacancyComponent from '../views/detail-vacancy-component'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'search/vacancy'
  },
  {
  path: "/search",
  name: "Main",
  component: mainComponent,
  children: [
    {
      path: 'vacancy',
      name: 'Vacancy',
      component: vacancyComponent,
    },
    {
      path: 'vacancy/:id',
      name: 'detailVacancy',
      component: detailVacancyComponent
    },
    {
      path: 'resume',
      name: 'Resume',
      component: resumeComponent
    },
    {
      path: 'employers',
      name: 'Employers',
      component: employerComponent
    }
  ]
},
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
