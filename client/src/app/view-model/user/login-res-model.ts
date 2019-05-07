import { Type } from 'class-transformer';
import {Role} from "../roles/role-vm";


export class LoginResVM
{
  id:number;
  account: string;
  fullname: string;
  token: string;
  @Type(() => Role)
  role: Role;
}
