import {Component, OnInit} from "angular2/core";
import {Article} from "../interfaces/article";
import {RouteParams} from "angular2/router";
import {ArticleService} from "../services/article.service";
import {TruncatePipe} from '../pipes/truncate.pipe';
import {CapitalizeFirstLetterPipe} from '../pipes/capitalize-first-letter.pipe';
import {CapitalizePipe} from '../pipes/capitalize.pipe';

@Component({
    selector:"article-detail",
    templateUrl: "app/layout/article-detail.html",
    providers: [ArticleService],
    pipes: [TruncatePipe, CapitalizeFirstLetterPipe, CapitalizePipe]
})
 export class ArticleDetailComponent implements OnInit{
     article: Article;
     constructor(private _articleService:ArticleService,
     private _routeParams: RouteParams) {}
     getArticleDetail(id:number) {          
           this._articleService.getArticleDetail(id).subscribe(res => {
            if(res.success) {      
                this.article = <Article>res.data;               
            } 
        },
        error =>  {            
            console.log(<any>error);
        });
     }
     ngOnInit() {
         // '+' covert string to number because parameter always strings
         let id = +this._routeParams.get('id');                  
         this.getArticleDetail(id);
     }
 }