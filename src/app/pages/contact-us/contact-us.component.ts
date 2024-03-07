import { Component } from '@angular/core';
import { BreadcrumbComponent, GMapComponent } from '../../components';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BreadcrumbComponent,GMapComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
