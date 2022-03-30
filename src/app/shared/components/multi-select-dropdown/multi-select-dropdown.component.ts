import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Task } from '../../interfaces/task';


@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.sass']
})

export class MultiSelectDropdownComponent implements OnInit {
  @Input() "items": Task[];
  @Output() selectionReady= new EventEmitter<Task[]>();
  currentMultiSelectState: Task[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  updateAllComplete(subtask: Task) {
    subtask.selected = subtask.subtasks != null && subtask.subtasks.every(t => t.selected);
    this.addOrReplaceItems(subtask);
  }

  someComplete(item: Task): boolean {
    if (item.subtasks == null) {
      return false;
    }
    return item.subtasks.filter(t => t.selected).length > 0 && !item.selected;
  }

  setAll(selected: boolean, item: Task) {
    item.selected = selected;
    if (item.subtasks == null) {
      return;
    }
    item.subtasks.forEach(t => (t.selected = selected));
    this.addOrReplaceItems(item);
  }
  addOrReplaceItems(item: Task): Task[] {
    const elementIdex = this.currentMultiSelectState.findIndex((element) => element.id === item.id);
    elementIdex > -1 ? this.currentMultiSelectState[elementIdex] = item : this.currentMultiSelectState.push(item);
    return this.currentMultiSelectState;
  }
  clearAllSelections() {
    this.currentMultiSelectState.forEach(element => {
      element.selected = false;
      element.subtasks?.forEach(subItem => (subItem.selected = false))
    }
    )
  }
  sendSelection(){
    if(this.currentMultiSelectState.length > 0){
      this.selectionReady.emit(this.currentMultiSelectState);
    }
  }

}
