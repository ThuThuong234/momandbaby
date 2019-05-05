import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../../view-model/topic/topic";

@Component({
  selector: 'app-form-topic',
  templateUrl: './form-topic.component.html',
  styleUrls: ['./form-topic.component.scss']
})
export class FormTopicComponent implements OnInit {
  @Input() isEdit: boolean = false;
  @Input() topic: Topic;
  title: string;
  buttonText:string;
  constructor() { }

  ngOnInit() {
    if(this.isEdit) {
      this.title = 'Edit Topic';
      this.buttonText = 'Update';
    } else {
      this.title = 'Create Topic';
      this.buttonText = 'Post';
    }
  }

}
