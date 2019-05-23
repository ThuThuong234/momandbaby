import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {AuthenticateService} from "../../services/authenticate.service";
import {UserService} from "../../services/user.service";
import {SessionVM} from "../../view-model/session/session-vm";
import {SignupModel} from "../../view-model/user/signup-model";
import {LoginModel} from "../../view-model/user/login-model";
import {Role} from "../../view-model/roles/role-vm";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  repeatpass: string;
  model: SignupModel = new SignupModel();
  modellogin: LoginModel = new LoginModel();
  session: SessionVM;

  constructor(private router: Router, private toastr: ToastrService, private authService: AuthenticateService, private userService: UserService) { }

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

  doSignUp() {
    function check(model: SignupModel, repeatpass: string,toastr: ToastrService) {
      if(!model.account){
        toastr.error('Phải nhập tên tài khoản!');
        return 0;
      }
      if(!model.email){
        toastr.error('Vui lòng nhập địa chỉ mail đúng!');
        return 0;
      }
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!filter.test(model.email)){
        toastr.error('Email không đúng định dạng!');
        return 0;
      }

      if(!model.fullname){
        toastr.error('Hãy nhập tên của bạn!');
        return 0;
      }
      if(!model.password||model.password.length<8){
        toastr.error('Mật phải có ít nhất 8 kí tự!');
        return 0;
      }
      if(model.password!=repeatpass){
        toastr.error('Nhập lại mật khẩu không đúng!');
        return 0;
      }
      return 1;
    }
    if (check(this.model,this.repeatpass,this.toastr)) {
      console.log(this.model);
      this.userService.signup(this.model).subscribe(
        res => {
          if (res.success==true) {
            this.modellogin.account=this.model.account;
            this.modellogin.password=this.model.password;
            this.userService.login(this.modellogin).subscribe(
              res2 =>{
                if( res2.data && res2.data.token ){
                  const newSession = new SessionVM(res2.data.id, res2.data.token, res2.data.role, res2.data.fullname, res2.data.account, res2.data.image_url);
                  this.authService.setSession(newSession);
                  console.log(newSession);
                  if(newSession.role.code === Role.ROLES.ADMIN || newSession.role.code === Role.ROLES.MEMBER){
                    this.router.navigate(['/']);
                  }
                  else {
                    console.log('1');
                    console.log(res2);
                    this.router.navigate(['/errorpage']);
                  }
                }
              }
            );
          } else {
            console.log('2');
            console.log(res);
            this.toastr.error('loi dang ki');
            this.router.navigate(['/errorpage']);
          }
        },
        error => {
          console.log('3');
          this.toastr.error('nhap accunt vaf mat khau');
          this.router.navigate(['/']);
        });
    }
  }
}
