import { Component, Inject, OnInit, Renderer2, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent, HeaderComponent } from './components';
import { environment } from '../environment/environment.prod';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  
  HomeComponent,AboutComponent, RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular 17 Bootstrap Theme';
  private rendrer = inject(Renderer2);
  mapkey = environment.mapKey;
  constructor(@Inject(DOCUMENT) private document: Document) {}
ngOnInit(): void {
  const script = this.rendrer.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${this.mapkey}`;
  script.defer = true;
  script.async = true;
  this.rendrer.appendChild(this.document.body, script);
}

}
