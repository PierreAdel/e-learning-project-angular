import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit {
  public randNum = Math.floor((Math.random() * 100) + 1);
  public articles:any[]=[];
  constructor(private _articlesService:ArticlesService,private route: ActivatedRoute) { }
  public articleId:any = null;
  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.articles=this._articlesService.getArticles();
  }
}
