import {Component, OnInit} from "angular2/core";
import {Router} from 'angular2/router';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../interfaces/article";
@Component({
    templateUrl: 'app/layout/admin/admin.add.article.html',
    providers: [ArticleService]
})
export class AdminAddArticleComponent implements OnInit{
    private article:Article = <Article>{};
    
    constructor(private _router: Router, private _articleService: ArticleService) {}      
    ngOnInit() {
        setTimeout( function() {
            tinymce.init({
                selector: '#content'
            });
        }, 500);
    }
    Post() {
        this.article._Content = $('#content')[0].value;
        var data = 'title=' + this.article.Title +'&description='   + this.article.Description + '&image=' + this.article.Image + '&content=' + this.article._Content; 
        this._articleService.postArticle(data).subscribe(res => {
            if(res.success) {      
                let link = ['AdminArticle'];
                this._router.navigate(link);
            } 
        },
        error =>  {            
            console.log(<any>error);
        });      
    }
}