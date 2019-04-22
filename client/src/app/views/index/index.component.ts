import { Component, OnInit } from '@angular/core';
import { User} from "../../view-model/user/user";
import {AuthenticateService} from "../../services/authenticate.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
import {TopicService} from "../../services/reader/topic_services";
import { TopicPaging } from "../../view-model/topic/topic-paging";
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

   user: User;
   users: User[];
   lastestTopic: {};
  constructor(
              private authService: AuthenticateService,
              private router: Router,
              private toastr: ToastrService,
              private translate: TranslateService,
              private topicServices: TopicService) { }


  ngOnInit() {
    // this.user = this.userService.getUser_root();
    this.getLatestTopic();
   }
  getLatestTopic(){
    this.topicServices.getLatestTopics().subscribe(
      res => {
        if (res.success && res.data) {
          console.log(res.data);
          this.lastestTopic =  res.data;
        } else {
          this.toastr.error(res.message);
        }
      },
      error => {
        this.toastr.error(this.translate.instant('COMMON.GET.FAILED'));
      });
  }

}
