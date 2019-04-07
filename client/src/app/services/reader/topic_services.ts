import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { APIService } from '../api.service';
import { SpinService } from '../spin.service';
import { ApiResult } from '../../data-transfer/api-result';
import {GetTypesApiResult} from '../../data-transfer/topics/getTopics.api-result';

@Injectable()
export class TopicService extends APIService {
  constructor(private http: HttpClient, private spintService: SpinService) {
    super(http, spintService);
  }

  public getLatestTopics() {
    return super.apiGet<GetTypesApiResult>('/topics/latest', null, false);
  }

}
