import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  categories = [];
  languages = [];
  books = [];

  constructor(private httpClient: HttpClient) {


  }


  startProcess(processId: string){
    return this.httpClient.get('http://localhost:8080/registration/get/' + processId) as Observable<any>;
  }

  getTasks(processInstance : string){

    return this.httpClient.get('http://localhost:8080/registration/get/tasks/'.concat(processInstance)) as Observable<any>;
  }

  claimTask(taskId: any){
    return this.httpClient.post('http://localhost:8080/registration/tasks/claim/'.concat(taskId), null) as Observable<any>;
  }

  completeTask(taskId: any){
    return this.httpClient.post('http://localhost:8080/registration/tasks/complete/'.concat(taskId), null) as Observable<any>;
  }

  getFileNames(processId: string) {
    return this.httpClient.get('http://localhost:8080/registration/files/'.concat(processId)) as Observable<any>;

  }

  getSynopses(processId: string) {
    return this.httpClient.get('http://localhost:8080/bookPublishing/get/'.concat(processId)) as Observable<any>;

  }

  getFileNamesPlagiarism(taskId: string) {
    return this.httpClient.get('http://localhost:8080/registration/filesPlagiarism/'.concat(taskId)) as Observable<any>;

  }
}
