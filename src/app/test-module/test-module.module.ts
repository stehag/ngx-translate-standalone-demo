import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TestmoduleComponent } from './testmodule/testmodule.component';

@NgModule({
  declarations: [TestmoduleComponent],
  imports: [
    CommonModule,
    TranslateModule
  ], exports: [TestmoduleComponent]
})
export class TestModuleModule { }
