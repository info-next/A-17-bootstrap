import { Component } from '@angular/core';
import { BlogCardComponent, MainBlogCardComponent } from '../../../components';


@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [BlogCardComponent,MainBlogCardComponent],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss'
})
export class BlogHomeComponent {

}
