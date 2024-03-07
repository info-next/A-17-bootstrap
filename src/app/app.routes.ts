import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  {path:'blogs', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)}
];
