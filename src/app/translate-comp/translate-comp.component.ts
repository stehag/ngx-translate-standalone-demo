import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'translate-comp',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './translate-comp.component.html',
  styleUrl: './translate-comp.component.scss'
})
export class TranslateCompComponent {

}
