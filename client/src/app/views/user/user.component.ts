import {Component, OnInit} from '@angular/core';
import {SessionVM} from '../../view-model/session/session-vm';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../view-model/user/user';
import {AuthenticateService} from '../../services/authenticate.service';
import {Router} from '@angular/router';
import {Role} from '../../view-model/roles/role-vm';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user: User = new User();
  public session: SessionVM;

  constructor(private authService: AuthenticateService, private router: Router,
              private toastr: ToastrService, private userService: UserService) {
  }

  ngOnInit() {
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

  getUser() {
    if (this.user.id) {
      this.userService.getUser(this.user.id.toString()).subscribe(
        res => {
          if (res.success && res.data) {
            console.log(res.data);
            this.toastr.success('Được rồi nè!');
          } else {
            this.toastr.error('Chưa đăng nhập!');
          }
        });

    }
    else {
      this.toastr.error('Chưa đăng nhập!');
      this.router.navigate(['/']);
    }

  }
}
