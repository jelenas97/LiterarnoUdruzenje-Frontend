import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  fetchUsers() {
    return this.httpClient.get('http://localhost:8080/user/fetch') as Observable<any>;
  }

  registerUser(user: any, taskId: any) {
    return this.httpClient.post('http://localhost:8080/registration/post/'.concat(taskId), user) as Observable<any>;
  }

  activateUser(processId: any) {
    return this.httpClient.get('http://localhost:8080/registration/activate/'.concat(processId)) as Observable<any>;
  }

  download() {
    return this.httpClient
      .get('http://localhost:8080/registration/download/123?taskId=a8bbf359-512d-11eb-a991-b010410e0ab5') as Observable<any>;
  }

  upload(file: File, processId: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `http://localhost:8080/registration/uploadFile/`.concat(processId), formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }
}
