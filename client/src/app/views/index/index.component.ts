import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";
import { User} from "../../view-model/user/user";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

   user: User;
   users: User[];
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.user = this.userService.getUser_root();
    this.users = this.userService.getUsers();
   }

}
