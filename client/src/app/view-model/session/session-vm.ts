import { Type } from 'class-transformer';

import { Role } from '../roles/role-vm';

export class SessionVM {
  token: string;
  fullname: string;
  account: string;
  id: number ;
  @Type(() => Role)
  role: Role;

  constructor(id:number,token: string, role: Role, fullname: string, account: string) {
    this.id = id;
    this.token = token;
    this.role = role;
    this.fullname = fullname;
    this.account = account;
  }

  updateToken(newToken: string) {
    this.token = newToken;
  }
}
