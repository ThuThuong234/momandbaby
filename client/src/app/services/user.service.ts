import {Injectable} from '@angular/core';
import {APIService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {SpinService} from "./spin.service";
import {LoginModel} from "../view-model/user/login-model";
import {GetTypesApiResult} from "../data-transfer/types/getTypes.api-result";

@Injectable()
export class UserService extends APIService {

  constructor( private  http: HttpClient, private  spinService: SpinService){
    super(http, spinService);
  }
  public  login( loginModel: LoginModel ){
    return super.apiPost<GetTypesApiResult>('/users/login', loginModel);
  }
}
