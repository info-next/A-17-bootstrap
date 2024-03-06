import { Component } from '@angular/core';
import { ButtonMainComponent } from '../../../components/button-main/button-main.component';

@Component({
  selector: 'about-section',
  standalone: true,
  imports: [ButtonMainComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

}
