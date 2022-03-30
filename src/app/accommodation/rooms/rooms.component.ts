import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {
  data: Task[] = [];
  constructor(private navigation: NavigationService, private route: Router) {
    this.data = this.route.getCurrentNavigation()?.extras.state as Task[]

  }

  ngOnInit(): void {
  }
  goBack() {
    this.navigation.back();
  }
}
