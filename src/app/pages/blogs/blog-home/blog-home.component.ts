import { Component } from '@angular/core';
import { BlogCardComponent } from '../../../components/blog-card/blog-card.component';
import { MainBlogCardComponent } from '../../../components/main-blog-card/main-blog-card.component';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [BlogCardComponent,MainBlogCardComponent],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss'
})
export class BlogHomeComponent {

}
