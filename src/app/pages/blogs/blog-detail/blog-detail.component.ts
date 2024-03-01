import { Component } from '@angular/core';
import { BlogCardComponent } from '../../../components/blog-card/blog-card.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {

}
