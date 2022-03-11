import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatBadgeModule,
    MatButtonModule
  ],
  exports: [MatSliderModule, MatBadgeModule, MatButtonModule]
})
export class MaterialModule { }
