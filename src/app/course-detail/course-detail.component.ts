import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})

export class CourseDetailComponent implements OnInit {
  public courses:any[]=[];
  constructor(private _coursesService:CoursesService,private route: ActivatedRoute) { }
  public courseId:any = null;
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.courses=this._coursesService.getCourses();
  }
}
