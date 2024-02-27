import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:'blogs', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)}
];
