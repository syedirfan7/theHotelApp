import {ThemePalette} from '@angular/material/core';

export interface Task {
    id?:Number
    name: string;
    selected: boolean;
    color: ThemePalette;
    subtasks?: Task[];
  }