import { Component } from '@angular/core';
import { AboutSectionComponent } from '../about/about-section/about-section.component';
import { ButtonMainComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutSectionComponent, ButtonMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
