import { ApiResult } from '../api-result';
import {UserPaging} from '../../view-model/user/user-paging';
export class GetUsersApiResult extends ApiResult {
  data: UserPaging;
}
