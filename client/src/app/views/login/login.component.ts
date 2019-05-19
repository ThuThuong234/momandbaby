import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {LoginModel} from "../../view-model/user/login-model";
import {SessionVM} from "../../view-model/session/session-vm";
import {UserService} from "../../services/user.service";
import {AuthenticateService} from "../../services/authenticate.service";
import {Role} from "../../view-model/roles/role-vm";
import {ToastrService} from 'ngx-toastr';
import {
  SocialService
} from "ng6-social-button";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  shareObj = {
    href: "FACEBOOK-SHARE-LINK",
    hashtag:"#FACEBOOK-SHARE-HASGTAG"
  };
  model: LoginModel = new LoginModel();
  session: SessionVM;

  constructor( private router: Router, private toastr: ToastrService,private socialAuthService: SocialService,
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


  // public socialSignIn(socialPlatform : string) {
  //   let socialPlatformProvider;
  //   if(socialPlatform == "facebook"){
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_TYPE;
  //   }else if(socialPlatform == "google"){
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_TYPE;
  //   }
  //
  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (socialUser) => {
  //       console.log(socialPlatform+" sign in data : " , socialUser);
  //       if( socialUser && socialUser.accessToken ){
  //         const newSession = new SessionVM(+(socialUser.id), socialUser.accessToken, new Role(null,'Member','member'), socialUser.name,socialUser.email);
  //         newSession.image_url=socialUser.image;
  //         newSession.email=socialUser.email;
  //         this.authService.setSession(newSession);
  //         // console.log(newSession);
  //         // if(newSession.role.code === Role.ROLES.ADMIN || newSession.role.code === Role.ROLES.MEMBER){
  //         this.router.navigate(['/']);
  //         // }
  //         // else {
  //         //   this.toastr.error('Lỗi dữ liệu');
  //         //   this.router.navigate(['/errorpage']);
  //         // }
  //         this.toastr.success("Đăng nhập facebook thành công!")
  //       }
  //       else {
  //         this.toastr.error("Đăng nhập facebook không thành công!");
  //       }
  //
  //     });
  // }
  getSocialUser(socialUser){
    console.log(socialUser);
    if( socialUser && socialUser.accessToken ){
              const newSession = new SessionVM(+(socialUser.id), socialUser.accessToken, new Role(null,'Member','member'), socialUser.name,socialUser.email);
              newSession.image_url=socialUser.image;
              newSession.email=socialUser.email;
              newSession.provider=socialUser.provider;
              this.authService.setSession(newSession);
              // console.log(newSession);
              // if(newSession.role.code === Role.ROLES.ADMIN || newSession.role.code === Role.ROLES.MEMBER){
              this.router.navigate(['/']);
              // }
              // else {
              //   this.toastr.error('Lỗi dữ liệu');
              //   this.router.navigate(['/errorpage']);
              // }
              this.toastr.success("Đăng nhập facebook thành công!")
            }
            else {
              this.toastr.error("Đăng nhập facebook không thành công!");
            }
  }

}
