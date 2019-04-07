import { ApiResult } from '../api-result';
import {TopicPaging} from '../../view-model/topic/topic-paging';

export class GetTypesApiResult extends ApiResult {
  data: TopicPaging;
}
