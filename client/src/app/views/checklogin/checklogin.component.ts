import { Component, OnInit } from '@angular/core';
import {User} from "../../view-model/user/user";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-checklogin',
  templateUrl: './checklogin.component.html',
  styleUrls: ['./checklogin.component.scss']
})
export class CheckloginComponent implements OnInit {

  user: User;
  users: User[];
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.user = this.userService.getUser_root();
    this.users = this.userService.getUsers();
  }

  }
