import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {LoginModel} from "../../view-model/user/login-model";
import {SessionVM} from "../../view-model/session/session-vm";
import {UserService} from "../../services/user.service";
import {AuthenticateService} from "../../services/authenticate.service";
import {Role} from "../../view-model/roles/role-vm";
import {forEach} from '@angular/router/src/utils/collection';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: LoginModel = new LoginModel();
  session: SessionVM;

  constructor( private router: Router, private toastr: ToastrService,
               private authService: AuthenticateService, private userService: UserService ) { }

  ngOnInit() {
    this.authService.session$.subscribe(
      data => {
        this.session = data;
        if ( this.session && this.session.token != null ){
          this.router.navigate(['/']);
        }
      }
    )
  }

  doLogin() {
    if(this.model.account && this.model.password){
      this.userService.login(this.model).subscribe(
        res => {
          if( res.data && res.data.token ){
            const newSession = new SessionVM(res.data.id, res.data.token, res.data.role, res.data.fullname, res.data.account);
            this.authService.setSession(newSession);
            console.log(newSession);
            if(newSession.role.code === Role.ROLES.ADMIN || newSession.role.code === Role.ROLES.MEMBER){
              this.router.navigate(['/']);
            }
            else {
              this.toastr.error('Lỗi dữ liệu');
              this.router.navigate(['/errorpage']);
            }
          }
          else {
            this.toastr.error(res.message);
          }
        }
      )

    }
  }

}
