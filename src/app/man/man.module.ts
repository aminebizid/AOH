import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManComponent } from './man.component';

@NgModule({
  declarations: [
    ManComponent
  ],
  exports: [
    ManComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class ManModule {

}
