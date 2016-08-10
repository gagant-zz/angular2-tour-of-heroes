import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path:'detail/:id',
    component: HeroDetailComponent
  }  
];

export const appRouterProviders = [
  provideRouter(routes)
];