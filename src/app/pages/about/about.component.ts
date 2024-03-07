import { Component } from '@angular/core';
import { AboutSectionComponent } from './about-section/about-section.component';
import { BreadcrumbComponent } from '../../components';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbComponent,AboutSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
