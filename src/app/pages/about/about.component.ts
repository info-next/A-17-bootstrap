import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { AboutSectionComponent } from './about-section/about-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbComponent,AboutSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
