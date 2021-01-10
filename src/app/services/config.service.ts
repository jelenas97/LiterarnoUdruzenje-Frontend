import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ConfigService {

    
private _authUrl = 'http://localhost:8080/auth';
private _serverUrl = 'http://localhost:8080';
private _loginUrl = this._authUrl + '/login';
userUrl = this._serverUrl + '/user';
whoAmIUrl = this._serverUrl + '/user/whoami';
private _refreshTokenUrl = this._serverUrl + '/refresh';


    get authUrl(): string {
        return this._authUrl;
      }
    
    set authUrl(value: string) {
    this._authUrl = value;
    }

    get serverUrl(): string {
        return this._serverUrl;
    }

    set serverUrl(value: string) {
        this._serverUrl = value;
    }

    get loginUrl(): string {
        return this._loginUrl;
    }
    
    set loginUrl(value: string) {
        this._loginUrl = value;
    }

    get user_url(): string {
        return this.userUrl;
    }

    get whoAmI_url(): string {
        return this.whoAmIUrl;
    }

    get refreshTokenUrl(): string {
        return this._refreshTokenUrl;
      }
    
    set refreshTokenUrl(value: string) {
    this._refreshTokenUrl = value;
    }
    
  }