import {Component, OnInit} from '@angular/core';
import {SessionVM} from '../../view-model/session/session-vm';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../view-model/user/user';
import {AuthenticateService} from '../../services/authenticate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../view-model/roles/role-vm';
import {UserService} from '../../services/user.service';
import {UserResModel} from '../../view-model/user/user-res-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  isEdit: boolean;
  user: User = new User();
  userShow: UserResModel;
  public session: SessionVM;

  constructor(private authService: AuthenticateService, private router: Router,
              private toastr: ToastrService, private userService: UserService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isEdit=true;
    this.authService.session$.subscribe(
      data => {
        this.session = data;
        if (this.session && this.session.token != null && this.session.role != null) {
          this.user.fullname = this.session.fullname;
          this.user.id = this.session.id;
          this.getUser();
          this.toastr.success('Xin chào ' + this.user.fullname);
        } else {
          this.toastr.error('Chưa đăng nhập!');
          this.router.navigate(['/']);
        }
      }
    );
  }
  changeEdit(){
    this.isEdit=!this.isEdit;
    console.log(this.isEdit);
  }

  getUser() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.userService.getUser(id.toString()).subscribe(
        res => {
          if (res.success && res.data) {
            this.userShow=res.data;
          } else {
            this.toastr.error('Lỗi hoặc không đủ quyền thực hiện!');
          }
        });
    }
    else {

      this.toastr.error('Id lỗi!');
    }
  }
  doUpdateUser(){

  }
}
