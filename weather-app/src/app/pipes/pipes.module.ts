import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorPipe } from './loading-indicator.pipe';



@NgModule({
  declarations: [
    LoadingIndicatorPipe
  ],
  exports: [
    LoadingIndicatorPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
