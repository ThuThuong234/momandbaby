import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { APIService } from '../api.service';
import { SpinService } from '../spin.service';
import { ApiResult } from '../../data-transfer/api-result';
import {GetTopicsApiResult} from '../../data-transfer/topics/getTopics.api-result';
import {Topic} from "../../view-model/topic/topic";
import {TopicApiResult} from '../../data-transfer/topics/topic.api-result';

@Injectable()
export class TopicService extends APIService {
  constructor(private http: HttpClient, private spintService: SpinService) {
    super(http, spintService);
  }

  public getLatestTopics() {
    return super.apiGet<GetTopicsApiResult>('/topics/latest', null, false);
  }

  public searchTopicbyTitle(search_key: string) {
    return super.apiGet<GetTopicsApiResult>('/topics/search/'+ search_key, null, false);
  }

  public insertTopic(topic: Topic) {
    return super.apiPost<TopicApiResult>('/topics/', topic, null,true);
  }

  public getLatestTopicById(id: string) {
    return super.apiGet<TopicApiResult>('/topics/'+id, null, false);
  }

}
