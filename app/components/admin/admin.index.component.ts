import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {AdminHeaderComponent} from '../admin/admin.header.component';
import {AdminMenuLeftComponent} from '../admin/admin.menuleft.component';
import {AdminFooterComponent} from '../admin/admin.footer.component';
import {AdminArticleComponent} from '../admin/admin.article.component';
@Component({
    selector:'admin-my-app',
    templateUrl: 'app/layout/admin/admin.board.html',
     directives: [AdminHeaderComponent, AdminMenuLeftComponent, AdminFooterComponent, RouterOutlet, ROUTER_DIRECTIVES]   
})
@RouteConfig([
    {
        path:'/Article',
        name: 'AdminArticle',
        component: AdminArticleComponent,
        useAsDefault: true
    },
    
])
export class AdminIndexComponent{}