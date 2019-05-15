import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TopicService} from '../../services/reader/topic_services';
import {Topic} from '../../view-model/topic/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topic: Topic;
  constructor(private  topicService: TopicService, private router: Router,
              private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTopic();
  }

  getTopic(): void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.topicService.getLatestTopicById(id.toString()).subscribe(
      res=>{
        if(res.success){
          this.toastr.success('Lấy bài viết thành công!')
          this.topic= res.data;
          console.log(res.data);
        }
        else{
          this.toastr.error('Đọc bài viết bị lỗi!')
        }
      }
    )

  }

}
