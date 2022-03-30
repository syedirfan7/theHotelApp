import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../shared/interfaces/task';
const url = 'https://5ffaa3b987478d0017d9a713.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Task[]> {
    const endPoint = 'items'
    return this.http.get<Task[]>(url + endPoint)
  }
}
