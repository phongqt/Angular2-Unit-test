import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {AdminLoginComponent} from '../admin/admin.login.component';
import {AdminIndexComponent} from '../admin/admin.index.component';
@Component({
    templateUrl: 'app/layout/admin/admin.index.html',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],    
})
@RouteConfig([
    {
        path:'/board/...',
        name: 'Board',
        component: AdminIndexComponent,
        useAsDefault: true
    }, 
    {
        path:'/login',
        name: 'Login',
        component: AdminLoginComponent
    }
    
])
export class AdminComponent {
} 