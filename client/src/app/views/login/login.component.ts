import { Component, OnInit } from '@angular/core';
import {LoginModel} from "../../view-model/user/login-model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: LoginModel = new LoginModel();

  constructor() { }

  ngOnInit() {
  }

  doLogin() {
    if(this.model.account && this.model.password){
      // this.userService.
      console.log("ok");
    }
  }

}
