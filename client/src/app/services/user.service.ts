import {Injectable} from '@angular/core';
import {APIService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {SpinService} from "./spin.service";
import {LoginModel} from "../view-model/user/login-model";
import {LoginApiResult} from "../view-model/user/login.api-result";
import {SignupModel} from "../view-model/user/signup-model";
import {ApiResult} from "../data-transfer/api-result";

@Injectable()
export class UserService extends APIService {

  constructor(private http: HttpClient, private spintService: SpinService) {
    super(http, spintService);
  }
  public  login( loginModel: LoginModel ){
    return super.apiPost<LoginApiResult>('/users/login', loginModel);
  }

  public  signup( signupModel: SignupModel ){
    return super.apiPost<ApiResult>('/users/signup', signupModel);
  }

}
