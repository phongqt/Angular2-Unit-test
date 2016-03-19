import {Http, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {User} from '../../interfaces/user';
import {Observable} from 'rxjs/Observable';
import {PublishVar} from '../../cores/config';

@Injectable()
export class AdminUserService {
    constructor(private http:Http){}
    private user:User;
    login(userName:string, passWord:string) {
        return this.http.get(PublishVar.apiUrl + 'user/login?username=' + userName + '&password=' + passWord)
                    .map(res => res.json())
                    .catch(this.handleError);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}