import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
  getArticles(){
    return [
      {"id":1,"name":"How to Get high score in project review",description:"Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali ","teacher":"Mossad"},
      {"id":2,"name":"decorater design pattern",description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam","teacher":"Omar Salem"},
      {"id":3,"name":"learn how to learn",description:" natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ips","teacher":"Omar Salem"}
    ]
  }
}
