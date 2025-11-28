import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectsCardComponent } from './components/projects-card.component/projects-card.component';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'card',
    component: ProjectsCardComponent
  }
];
