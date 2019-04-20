import { Type } from 'class-transformer';
import {Role} from "../roles/role-vm";


export class LoginResVM
{
  account: string;
  fullname: string;
  token: string;
  @Type(() => Role)
  role: Role;
}
