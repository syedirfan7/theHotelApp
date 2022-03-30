import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = []

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  back(): void {
    console.log(this.history);
    this.history.pop()
    if (this.history.length > 0) {
      console.log(this.history.length)
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }
}