import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../shared/interfaces/task';
import { NavigationService } from '../shared/services/navigation.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.sass']
})
export class AccommodationComponent implements OnInit {
  dropDownContent: Task[] = [];
  selectedData: Task[] =[];
  constructor(private router: Router, private navigation: NavigationService, private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getItems().subscribe((items) => {
      this.dropDownContent = items;
      console.log(this.dropDownContent)
    })
  }
  search() {
    if(this.selectedData.length>0) { 
      this.router.navigate(['/rooms'],{state: this.selectedData})
    }
    
  }
  goBack() {
    this.navigation.back();
  }
  setSelectionData(data : Task[]){
    this.selectedData = data;
    console.log(this.selectedData)
  }

}
