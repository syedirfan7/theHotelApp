import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatBadgeModule,
    MatButtonModule,MatCheckboxModule
  ],
  exports: [MatSliderModule, MatBadgeModule, MatButtonModule,MatCheckboxModule]
})
export class MaterialModule { }
