import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {AdminUserService} from '../../services/admin/admin.user.service';
import {AuthHelper} from '../../cores/auth-helper';
@Component({
    selector:'admin-login',
    templateUrl: 'app/layout/admin/login.html',
    providers: [AdminUserService]
})

export class AdminLoginComponent{   
    private user= {        
        UserName: '',
        Password: '' 
    };
    isLoading:boolean = false;
    errorMessage: string;
    constructor(private _adminUserService: AdminUserService, private _router: Router){       
    } 
    Login() {
        this.isLoading = true;
        this._adminUserService.login(this.user.UserName, this.user.Password).subscribe(res => {
            if(res.success) {                 
                AuthHelper.setCookieStore('blog-admin', res.data);
                let link = ['Board'];
                this._router.navigate(link);
            } else {
                this.errorMessage = res.message;
            }
            this.isLoading = false;
        },
        error =>  {
            AuthHelper.setCookieStore('blog-admin', 11);
            this.errorMessage = <any>error;
            this.isLoading = false;
        });
    }
}