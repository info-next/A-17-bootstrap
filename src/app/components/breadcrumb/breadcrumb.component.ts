import { Component, Input } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
 @Input() pageName: string = '';
 @Input() title: string = '';
}
