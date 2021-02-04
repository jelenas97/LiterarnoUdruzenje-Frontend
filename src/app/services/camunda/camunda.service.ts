import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProcessDto} from '../../dto/processDto';

@Injectable({
  providedIn: 'root'
})
export class CamundaService {

  constructor(private httpClient: HttpClient) { }

  public startReaderRegistrationProcess() {
    return this.httpClient.get<ProcessDto>('http://localhost:8080/registration/startReader');
  }

  public startWriterRegistrationProcess() {
    return this.httpClient.get<ProcessDto>(`http://localhost:8080/registration/startWriter`);
  }

  public startBookPublishingProcess(email:string) {
    return this.httpClient.get<ProcessDto>(`http://localhost:8080/bookPublishing/startBookPublishing/`.concat(email));
  }

  getUserTasks(username: string) {
    return this.httpClient.get('http://localhost:8080/user/tasks/'.concat(username));
  }

  getBookComments(processId: string) {
    return this.httpClient.get('http://localhost:8080/bookPublishing/comments/'.concat(processId)) as Observable<any>;

  }

  getLectorCorrections(processId: string) {
    return this.httpClient.get('http://localhost:8080/bookPublishing/lectorCorrections/'.concat(processId)) as Observable<any>;
  }

  getEditorSuggestions(processId: string){
    return this.httpClient.get('http://localhost:8080/bookPublishing/editorSuggestions/'.concat(processId)) as Observable<any>;
  }

  getBookDetails(processId: string){
    return this.httpClient.get('http://localhost:8080/bookPublishing/bookDetails/'.concat(processId)) as Observable<any>;
  }

  getSynopsis(processId: string){
    return this.httpClient.get('http://localhost:8080/bookPublishing/synopsis/'.concat(processId)) as Observable<any>;
  }

  getSubmissionDetails(processId: string){
    return this.httpClient.get('http://localhost:8080/bookPublishing/submissionDetails/'.concat(processId)) as Observable<any>;
  }
}
