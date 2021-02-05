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

  download(name: any, processId: string): Observable<any>{
    return this.httpClient
      .get('http://localhost:8080/registration/download/'.concat(name).concat('?taskId=').concat(processId), { responseType: 'blob' });
  }

  upload(files: FileList, processId: any) {
    const formData: FormData = new FormData();
    for (var i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    return this.httpClient.post('http://localhost:8080/registration/uploadFile/'.concat(processId), formData) as Observable<any>;
  }

  downloadFromFilename(name: any, taskId: string) {
    return this.httpClient
      // tslint:disable-next-line:max-line-length
      .get('http://localhost:8080/registration/downloadFromSystem/'.concat(name).concat('?taskId=').concat(taskId), { responseType: 'blob' });
  }
}
