import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-main',
  standalone: true,
  imports: [],
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.scss'
})
export class ButtonMainComponent {
@Input() btnName: string = '';
@Input() btnType: string = '';

}
