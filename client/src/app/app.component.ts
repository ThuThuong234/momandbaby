import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService} from "./user.service";


@Component({
  selector: 'Body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit  {

  constructor(private router: Router, private userService: UserService ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }

}
