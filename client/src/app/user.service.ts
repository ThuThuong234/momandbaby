import { Injectable } from '@angular/core';
import {User} from "./view-model/user/user";
import { user_session } from "./view-model/user/mockup-user_session";
import {listuser} from "./view-model/user/mockup-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser_root(){
    return user_session;
  }
  getUsers(): User[]{
    return listuser;
  }
  constructor() { }
}
