import {Component} from 'angular2/core';
import {AdminUserService} from '../../services/admin/admin.user.service';
@Component({
    selector:'admin-login',
    templateUrl: 'app/layout/admin/login.html',
    providers: [AdminUserService]
})

export class AdminLoginComponent{   
    public user= {        
        UserName: '',
        Password: ''
    };
    constructor(private _adminUserService: AdminUserService){} 
    Login() {
        this._adminUserService.login().subscribe(function (res) {
            var tmp = res;
        }, function (error) {
            var tmp2 = error;
        });
    }
}