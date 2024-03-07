import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'g-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './g-map.component.html',
  styleUrl: './g-map.component.scss'
})
export class GMapComponent {
 
}
