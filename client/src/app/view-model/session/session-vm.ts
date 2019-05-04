import { Type } from 'class-transformer';

import { Role } from '../roles/role-vm';

export class SessionVM {
  token: string;
  fullname: string;
  account: string;
  id: number ;
  @Type(() => Role)
  role: Role;

  constructor(token: string, role: Role, fullname: string, account: string) {
    this.token = token;
    this.role = role;
    this.fullname = fullname;
    this.account = account;
  }

  updateToken(newToken: string) {
    this.token = newToken;
  }
}
