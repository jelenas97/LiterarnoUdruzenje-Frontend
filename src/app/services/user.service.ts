import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser;
  userr;
  constructor(private apiService: ApiService, private config: ConfigService) {

  }

initUser() {
    const promise = this.apiService.get(this.config.refreshTokenUrl).toPromise()
      .then(res => {
        if (res.access_token !== null) {
          return this.getMyInfo().toPromise()
            .then(user => {
              this.currentUser = user;
              console.log(this.currentUser);
            });
        }
      })
      .catch(() => null);
    return promise;
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoAmI_url)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user)); // sacuvaju se osnovni podaci o ulogovanom useru
        return user;
      }));
  }
}