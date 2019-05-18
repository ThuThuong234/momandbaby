import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { APIService } from '../api.service';
import { SpinService } from '../spin.service';
import { ApiResult } from '../../data-transfer/api-result';
import {GetTopicsApiResult} from '../../data-transfer/topics/getTopics.api-result';
import {Topic} from "../../view-model/topic/topic";
import {TopicApiResult} from '../../data-transfer/topics/topic.api-result';

@Injectable()
export class CommentService extends APIService {
  constructor(private http: HttpClient, private spintService: SpinService) {
    super(http, spintService);
  }

  // public getLatestTopics() {
  //   return super.apiGet<GetTopicsApiResult>('/topics/latest', null, false);
  // }

  public commentTopic(url,comment) {
    return super.apiPost<ApiResult>(url, comment);
  }

}
