import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses:any[]=[];
  constructor(private _coursesService:CoursesService,private router:Router) { }

  ngOnInit(): void {
    this.courses=this._coursesService.getCourses();
  }

  onSelect(course:any) {
    this.router.navigate(['/courses',course.id])
  }

}
