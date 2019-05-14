import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../../view-model/topic/topic";
import {TypePaging} from "../../../view-model/type/type-paging";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
import {TypeService} from "../../../services/reader/type_services";
import {deserialize, plainToClass} from "class-transformer";
import {HttpClient} from "@angular/common/http";
import {TopicService} from "../../../services/reader/topic_services";
import {SessionVM} from "../../../view-model/session/session-vm";
import {UploadFileService} from "../../../services/uploadfile.service";

@Component({
  selector: 'app-form-topic',
  templateUrl: './form-topic.component.html',
  styleUrls: ['./form-topic.component.scss']
})
export class FormTopicComponent implements OnInit {
  @Input() isEdit: boolean = false;
  @Input() topic: Topic;
  title: string;
  buttonText: string;
  typeList: TypePaging;
  topicData: Topic = new Topic();
  thumbnail: File = null;
  selectedFiles: FileList;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService,
    private typeService: TypeService,
    private topicService: TopicService,
    private http:HttpClient,
    private uploadService: UploadFileService
  ) { }

  ngOnInit() {
    if(this.isEdit) {
      this.title = 'Edit topic';
      this.buttonText = 'Update';
    } else {
      this.title = 'Create topic';
      this.buttonText = 'Post';
    }
    this.getAllType();
  }

  getAllType(){
    this.typeService.getAllType().subscribe(
      res => {
        if (res.success && res.data) {
          console.log(res.data);
          this.typeList = plainToClass(TypePaging, res.data);
        } else {
          this.toastr.error(res.message);
        }
      },
      error => {
        this.toastr.error(this.translate.instant('COMMON.GET.FAILED'));
      });
  }

  submitTopic(){
    // upload image
    const file = this.selectedFiles.item(0);
    console.log("upload file: ");
    var dataFile = this.uploadService.uploadFile(file);
    // console.log(dataFile);
    // get current user
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser != null && dataFile != null) {
      const session = deserialize(SessionVM, currentUser);
      this.topicData.author= session.id;
      this.topicData.img = dataFile['Location'];
      console.log(dataFile['Location']);
      this.topicService.insertTopic(this.topicData).subscribe(
        res => {
          console.log(res);
          if (res.success) {
            this.toastr.success(this.translate.instant('COMMON.CREATE.SUCCESS'));
          } else {
            this.toastr.error(res.message);
          }
        },
        error => {
          this.toastr.error(this.translate.instant('COMMON.CREATE.FAILED'));
        });
    } else {
      this.toastr.error(this.translate.instant('COMMON.CREATE.FAILED'));
    }

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onInputFileChange(files:FileList){
    this.thumbnail = files.item(0);
    console.log(this.thumbnail);
  }


}
