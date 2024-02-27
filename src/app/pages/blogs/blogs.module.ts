import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';

const routes = [
  {path:'',component:BlogHomeComponent},
  {path:'detail/:id',component:BlogDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BlogsModule { }
