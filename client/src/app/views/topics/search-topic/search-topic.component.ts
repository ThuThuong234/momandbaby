import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-topic',
  templateUrl: './search-topic.component.html',
  styleUrls: ['./search-topic.component.scss']
})
export class SearchTopicComponent implements OnInit {

  topicsList: any[];

  constructor() { }

  ngOnInit() {
  }
  getSearchTopic(search_key){

  }

}
