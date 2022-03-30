import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';


@NgModule({
  declarations: [MultiSelectDropdownComponent],
  imports: [
    CommonModule,
      MaterialModule,
      FormsModule
  ],
  exports:[MultiSelectDropdownComponent],
})
export class SharedModule { }
