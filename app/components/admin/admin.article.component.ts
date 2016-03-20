import {Component, OnInit} from "angular2/core";
import {ArticleService} from "../../services/article.service";
import {Router} from 'angular2/router';
import {Article} from "../../interfaces/article";
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {CapitalizeFirstLetterPipe} from '../../pipes/capitalize-first-letter.pipe';
import {CapitalizePipe} from '../../pipes/capitalize.pipe'
@Component({
    templateUrl: 'app/layout/admin/admin.article.html',
    providers: [ArticleService],
    pipes: [TruncatePipe, CapitalizeFirstLetterPipe, CapitalizePipe]
})
export class AdminArticleComponent implements OnInit{
    private articles: Article[];
    private page:number = 1;
    private limit:number = 5;
    private isDisabledPrevious:boolean = true;
    private isDisabledNext:boolean = false;
    constructor(private _articleService: ArticleService,
    private _router: Router){};
    
    getNews() {
        this._articleService.getArticles(this.page, this.limit).then(articles => this.articles = articles);
    }
    ngOnInit() {
        this.getNews();
    }
    gotoNext() {        
        this.isDisabledPrevious = false;
        this.page ++;
        this.isDisabledNext = this.page * this.limit >=50;
        this.getNews();
    }
    gotoPrevious() {        
        this.page --;
        this.isDisabledPrevious = this.page == 1;
        this.isDisabledNext = false;
        this.getNews();
    }
    gotoArticleDetail(article: Article) {
        let link = ['ArticleDetail', { id: article.id }];
        this._router.navigate(link);
    }
}