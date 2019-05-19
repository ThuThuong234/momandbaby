import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TopicService} from '../../services/reader/topic_services';
import {Topic} from '../../view-model/topic/topic';
import {CommentModel} from '../../view-model/comment/commentAdd';
import {AuthenticateService} from '../../services/authenticate.service';
import {SessionVM} from '../../view-model/session/session-vm';
import {CommentService} from '../../services/reader/comment_services';
import {CommentModelRes} from '../../view-model/comment/commentRes';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topic: Topic;
  urlstring:string;
  user_name:string;
  user_id:number;
  commentAdd: CommentModel;
  public session: SessionVM;
  listComment:CommentModelRes[];
  isComment:number;
  constructor(private authService: AuthenticateService,
              private  topicService: TopicService,
              private  commentService: CommentService,
              private router: Router,
              private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.commentAdd = new CommentModel();
    this.getTopic();
    this.getCommentByIdTopic();
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
          this.commentAdd.topic_id=this.topic.id;
          console.log(this.commentAdd);// this.getCommentByIdTopic(this.topic.id);
        }
        else{
          this.toastr.error('Đọc bài viết bị lỗi!')
        }
      });
  }
  getCommentByIdTopic(){

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.commentService.getListCommentByIdTopic(id).subscribe(
      res => {
        if (res.success) {
          console.log(res);
          this.listComment=res.data;
        }
        else{
          this.toastr.error("Không có bình luận nào!")
        }
      });
  }

  commentTopic(){
    this.urlstring= "/topics/"+ this.topic.id+"/comments";
    this.checkLogin();
    if(this.isComment==0){
      this.toastr.error("Chưa đăng nhập!")
    }
    else{
      if(this.commentAdd.content!=""){
        this.commentService.commentTopic(this.urlstring,this.commentAdd).subscribe(
          res =>{
            if(res.success){
              this.commentAdd.content="";
              this.getCommentByIdTopic();
              this.toastr.success('Đã bình luận!')
            }
            else{
              console.log(res);
              this.toastr.error('Lỗi!')
            }
          });
      }
      else{
        this.toastr.error("Nhập nội dung bình luận!")
      }

    }

  }
   checkLogin(){
      this.authService.session$.subscribe(
        data => {
          this.session = data;
          if (this.session && this.session.token != null && this.session.role != null) {
            this.commentAdd.user_id= this.session.id;
            this.user_name= this.session.fullname;
            this.user_id= this.session.id;
            this.isComment=1;
          }
          else {
            this.isComment=0;
          }
        }
      )
  }

}
