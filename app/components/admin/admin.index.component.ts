import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {Router} from 'angular2/router';
import {AdminHeaderComponent} from '../admin/admin.header.component';
import {AdminMenuLeftComponent} from '../admin/admin.menuleft.component';
import {AdminFooterComponent} from '../admin/admin.footer.component';
import {AdminArticleComponent} from '../admin/admin.article.component';
import {CookieService} from 'angular2-cookie/core'; 
@Component({
    selector:'admin-my-app',
    templateUrl: 'app/layout/admin/admin.board.html',
     directives: [AdminHeaderComponent, AdminMenuLeftComponent, AdminFooterComponent, RouterOutlet, ROUTER_DIRECTIVES],
     providers: [CookieService]   
})
@RouteConfig([
    {
        path:'/Article',
        name: 'AdminArticle',
        component: AdminArticleComponent,
        useAsDefault: true
    },
    
])
export class AdminIndexComponent implements OnInit{
    constructor( private _router: Router, private _cookieService:CookieService){       
    } 
    ngOnInit() {
        let cookieSotote = this._cookieService.getObject('blog-admin');
        if (!cookieSotote){        
            let link = ['Login'];
            this._router.navigate(link);
        } 
    }
}