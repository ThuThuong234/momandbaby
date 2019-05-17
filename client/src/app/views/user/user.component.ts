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
  namefull: string;
  id: string;
  public session: SessionVM;

  constructor(private authService: AuthenticateService, private router: Router,
              private toastr: ToastrService, private userService: UserService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isEdit=true;
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.authService.session$.subscribe(
      data => {
        this.session = data;
        if (this.session && this.session.token != null && this.session.role != null) {
          this.user.fullname = this.session.fullname;
          this.user.id = this.session.id;
          this.user.role = this.session.role;
          this.getUser();
        } else {
          this.toastr.error('Chưa đăng nhập!');
          this.router.navigate(['/']);
        }
      }
    );
  }
  changeEdit(){
    if(this.isEdit==false){
      window.location.reload();
    }
    console.log(this.isEdit)
    this.isEdit=!this.isEdit;
  }

  getUser() {
    if (this.id) {
      this.userService.getUser(this.id).subscribe(
        res => {
          if (res.success && res.data) {
            this.userShow=res.data;
            this.namefull=res.data.fullname;
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
    this.userService.updateUser(this.userShow).subscribe(
      res => {
        if (res.success && res.data) {
          this.toastr.success('Cập nhật thành công!');
          window.location.reload();
        } else {
          console.log(res);
          this.toastr.error('Lỗi hoặc không đủ quyền thực hiện!');
        }
      });
  }
}
