import { Cookie } from 'ng2-cookies/ng2-cookies';

export module AuthHelper {    
    var cookie: Cookie;      
    export function setCookieStore(key:string, object:any): void{
       this.cookie.setCookie(key, object);
    } 
    export function getCookieStore(key:string): any{
        // return Cookie.getCookie(key);
    } 
}