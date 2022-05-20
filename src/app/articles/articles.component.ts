import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public randNum = Math.floor((Math.random() * 100) + 1);
  public articles:any[]=[];
  constructor(private _articlesService:ArticlesService,private router:Router) { }

  ngOnInit(): void {
    this.articles=this._articlesService.getArticles();
  }
  onSelect(article:any) {
    this.router.navigate(['/articles',article.id])
  }
}
