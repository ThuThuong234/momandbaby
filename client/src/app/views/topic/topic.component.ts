import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TopicService} from '../../services/reader/topic_services';
import {Topic} from '../../view-model/topic/topic';
import {CommentModel} from '../../view-model/comment/comment';
import {AuthenticateService} from '../../services/authenticate.service';
import {SessionVM} from '../../view-model/session/session-vm';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topic: Topic;
  urlstring:string;
  commentAdd: CommentModel;
  public session: SessionVM;
  isComment:number;
  constructor(private authService: AuthenticateService,
              private  topicService: TopicService,
              // private  commentService: CommentService,
              private router: Router,
              private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.commentAdd = new CommentModel();
    this.getTopic();
    this.checkLogin();
  }

  getTopic(): void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.topicService.getLatestTopicById(id.toString()).subscribe(
      res=>{
        if(res.success){
          this.toastr.success('Lấy bài viết thành công!')
          this.topic= res.data;
          console.log(this.commentAdd);
          this.commentAdd.topic_id=this.topic.id;          // this.getCommentByIdTopic(this.topic.id);
        }
        else{
          this.toastr.error('Đọc bài viết bị lỗi!')
        }
      });
  }
  // getCommentByIdTopic(id): void{
  //
  // }

  // commentTopic(){
  //   this.urlstring= "/topics/"+ this.topic.id+"/comments";
  //   this.isComment=this.checkLogin();
  //   if(this.isComment==false){
  //     this.toastr.error("Chưa đăng nhập!")
  //   }
  //   else{
  //     if(this.commentAdd.content!="")
  //       this.commentService.commentTopic(this.urlstring,this.commentAdd).subscribe(
  //         res =>{
  //           if(res.success){
  //             this.toastr.success('Comment ok')
  //
  //           }
  //           else{
  //             console.log(res);
  //             this.toastr.error('loi comment')
  //           }
  //         });
  //   }
  //
  // }
   checkLogin(){
      this.authService.session$.subscribe(
        data => {
          this.session = data;
          if (this.session && this.session.token != null && this.session.role != null) {
            this.commentAdd.user_id= this.session.id;
            this.isComment=1;
          }
          else {
            this.isComment=0;
          }
        }
      )
  }

}
