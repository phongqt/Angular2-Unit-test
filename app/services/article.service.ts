import {Http, Headers, Response, RequestOptions} from 'angular2/http';
// import {Articles} from './mock-article';
import {Article} from '../interfaces/article';
import {Injectable} from 'angular2/core';
import {PublishVar} from '../cores/config';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ArticleService {
  constructor(private http:Http){}
  getArticles(page:number, limit:number) {
      return this.http.get(PublishVar.apiUrl + 'article?page=' + page + '&limit=' + limit)
                    .map(res => res.json())
                    .catch(this.handleError);    
      
    // return Promise.resolve(Articles).then(function (res:Article[]) {
    //     var list=[];
    //     res = res.sort((n1,n2) => {
    //         if (n1.id < n2.id) {
    //             return 1;
    //         }

    //         if (n1.id > n2.id) {
    //             return -1;
    //         }

    //         return 0;
    //     });
    //     for (var i = ((page - 1)* limit); i <res.length; i++) {
    //         list.push(res[i]);
    //         if (i == (limit * page -1)) {
    //             break;
    //         }
    //     }
    //     return list;
    // });
    //return Promise.resolve(Articles);
  } 
  getArticleDetail(id: number) { 
    //   var element = Articles.map(function(x) {return x.id; }).indexOf(id);
    //   return Articles[element];
    //  return Promise.resolve(Articles).then(Article => Articles.filter(Article => Article.id === id)[0]);
     return this.http.get(PublishVar.apiUrl + 'article/' + id)
                    .map(res => res.json())
                    .catch(this.handleError);         
  } 
  private handleError (error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
  deleteArticle(id:number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(PublishVar.apiUrl + 'article/' + id, options)
        .map(res => res.json())
        .catch(this.handleError);   
  }
  postArticle(data:string) {
    //let body = JSON.stringify({ data });
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(PublishVar.apiUrl + 'article/',data, options)
        .map(res => res.json())
        .catch(this.handleError);   
  }
  uploadFile(file) {
      let formData:any = new FormData();
      formData.append("files", file);
      var headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      let options = new RequestOptions({ headers: headers });
      return this.http.post(PublishVar.apiUrl + 'file', formData, { headers: headers })
        .map(res => res.json()) 
        .catch(this.handleError);  
  }
}