import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
@Component({
   selector: "admin-footer",
   templateUrl: 'app/layout/admin/admin.footer.html',
   directives: [RouterOutlet, ROUTER_DIRECTIVES],
})

export class AdminFooterComponent{
    
}