import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public courses: any[] = [];
  public articles: any[] = [];
  constructor(
    private _articlesService: ArticlesService,
    private _coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();
    this.articles = this._articlesService.getArticles();
  }
  onSelectCourse(course: any) {
    this.router.navigate(['/courses', course.id]);
  }

  onSelectArticle(article: any) {
    this.router.navigate(['/articles', article.id]);
  }
}
