import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"Vue"}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(course:any) {
    this.router.navigate(['/courses',course.id])
  }

}
