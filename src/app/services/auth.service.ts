import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { User } from "../shared/model/user";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

currUser: User;

constructor(
    private httpClient: HttpClient,
    private config: ConfigService,
    private router: Router,
    private apiService: ApiService
){
    this.currUser= new User();
}

private accessToken = null;

login(user){
    const loginHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const body ={
        username : user.username,
        password : user.password,
    };
    return this.apiService.post(this.config.loginUrl, JSON.stringify(body), loginHeaders)
        .pipe(map((res)=>{
            console.log('Login success');
            this.accessToken = res.accessToken;
            this.currUser=res.user;
            
        }));
}

logout() {
    this.accessToken = null;
    this.currUser = null;
    this.router.navigate(['/login']);
  }

getCurrUser() {
    return this.currUser;
}

tokenIsPresent() {
    return this.accessToken !== undefined && this.accessToken != null;
  }

getToken() {
    return this.accessToken;
}
    
getUserByUsername(username: string) {
    return this.httpClient.post<User>(this.config.userUrl + '/username', username);
    }
}