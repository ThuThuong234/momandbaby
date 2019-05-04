import {Component, OnInit} from '@angular/core';
import {User} from "../../view-model/user/user";
import {UserService} from "../../services/user.service";
import {AuthenticateService} from "../../services/authenticate.service";
import {SessionVM} from "../../view-model/session/session-vm";

@Component({
  selector: 'app-checklogin',
  templateUrl: './checklogin.component.html',
  styleUrls: ['./checklogin.component.scss']
})
export class CheckloginComponent implements OnInit {
  user: User = new User();
  public session: SessionVM;
  constructor(
              private authService: AuthenticateService,) {
  }

  ngOnInit() {
    this.authService.session$.subscribe(
      data => {
        this.session = data;
        if (this.session && this.session.token != null && this.session.role != null) {
          this.user.fullname = this.session.fullname;
          this.user.id = this.session.id;
        }
      }
    );

  }

}
