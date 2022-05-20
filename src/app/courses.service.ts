import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourses(){
    return [
      {"id":1,"name":"Angular",description:"Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali ","teacher":"Mossad"},
      {"id":2,"name":"React",description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam","teacher":"Omar Salem"},
      {"id":3,"name":"Vue",description:" natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ips","teacher":"Omar Salem"}
    ]
  }
}
