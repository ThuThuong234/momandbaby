import { Type } from 'class-transformer';

import { RoleVM } from '../roles/role-vm';

export class SessionVM {
  token: string;
  fullname: string;
  account: string;
  @Type(() => RoleVM)
  role: RoleVM;

  constructor(token: string, role: RoleVM, fullname: string, account: string) {
    this.token = token;
    this.role = role;
    this.fullname = fullname;
    this.account = account;
  }

  updateToken(newToken: string) {
    this.token = newToken;
  }
}
