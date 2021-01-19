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

  public startBookPublishingProcess() {
    return this.httpClient.get<ProcessDto>(`http://localhost:8080/bookPublishing/startBookPublishing`);
  }

  getUserTasks(username: string) {
    return this.httpClient.get('http://localhost:8080/user/tasks/'.concat(username));
  }
}
