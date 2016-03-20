import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {CookieService} from 'angular2-cookie/core'; 
@Component({
   selector: "admin-header",
   templateUrl: 'app/layout/admin/admin.header.html',
   directives: [RouterOutlet, ROUTER_DIRECTIVES],
   providers: [CookieService]   
})

export class AdminHeaderComponent{
    constructor( private _router: Router, private _cookieService:CookieService){       
    } 
    Logout() {
        this._cookieService.remove('blog-admin');
        let link = ['Login'];
        this._router.navigate(link);
    }
}