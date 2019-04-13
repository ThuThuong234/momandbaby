import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-topics',
  templateUrl: './list-topics.component.html',
  styleUrls: ['./list-topics.component.scss']
})
export class ListTopicsComponent implements OnInit {
  @Input() topicsList: any[];
  constructor() { }

  ngOnInit() {
    console.log(this.topicsList);
  }

}
