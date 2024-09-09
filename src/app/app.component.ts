import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateCompComponent } from "./translate-comp/translate-comp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-standalone-poc';
}
