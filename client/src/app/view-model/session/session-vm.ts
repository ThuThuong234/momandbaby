import { Type } from 'class-transformer';

import { Role } from '../roles/role-vm';

export class SessionVM {
  token: string;
  fullname: string;
  account: string;
  id: number;
  @Type(() => Role)
  role: Role;
  image_url:string;
  email:string;
  provider:string;

  constructor(id:number,token: string, role: Role, fullname: string, account: string,image_url: string) {
    this.id = id;
    this.token = token;
    this.role = role;
    this.fullname = fullname;
    this.account = account;
    this.image_url = image_url;
  }

  updateToken(newToken: string) {
    this.token = newToken;
  }
}
