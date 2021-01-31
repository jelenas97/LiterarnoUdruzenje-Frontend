import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  saveBook(book: any, taskId: any) {
    return this.httpClient.post('http://localhost:8080/bookPublishing/post/'.concat(taskId), book) as Observable<any>;
  }

  decideOnSynopsis(decision: any, taskId: any) {
    return this.httpClient.post('http://localhost:8080/bookPublishing/post/'.concat(taskId), decision) as Observable<any>;
  }

  getPlagiarisms(processId: string) {
    return this.httpClient.get('http://localhost:8080/bookPublishing/getPlagiarisms/'.concat(processId)) as Observable<any>;
  }
}