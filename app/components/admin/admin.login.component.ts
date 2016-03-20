import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {AdminUserService} from '../../services/admin/admin.user.service';
import {CookieService} from 'angular2-cookie/core';
@Component({
    selector:'admin-login',
    templateUrl: 'app/layout/admin/login.html',
    providers: [AdminUserService,CookieService]
})

export class AdminLoginComponent implements OnInit{   
    private user= {        
        UserName: '',
        Password: '' 
    };
    isLoading:boolean = false;
    errorMessage: string;
    constructor(private _adminUserService: AdminUserService, private _router: Router, private _cookieService:CookieService){       
    } 
    ngOnInit() {
        let cookieSotote = this._cookieService.getObject('blog-admin');
        if (cookieSotote){        
            let link = ['Board'];
            this._router.navigate(link);
        } 
    }
    Login() {
        this.isLoading = true;
        this._adminUserService.login(this.user.UserName, this.user.Password).subscribe(res => {
            if(res.success) {                 
                this._cookieService.putObject('blog-admin', res.data);                
                let link = ['Board'];
                this._router.navigate(link);
            } else {
                this.errorMessage = res.message;
            }
            this.isLoading = false;
        },
        error =>  {            
            this.errorMessage = <any>error;
            this.isLoading = false;
        });
    }
}