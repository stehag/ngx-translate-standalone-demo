import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateCompComponent } from "./translate-comp/translate-comp.component";
import { TestmoduleComponent } from "./test-module/testmodule/testmodule.component";
import { TestModuleModule } from './test-module/test-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateCompComponent, TestModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-standalone-poc';
}
