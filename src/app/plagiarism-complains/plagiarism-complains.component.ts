import { RepositoryService } from './../services/repository/repository.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../services/camunda/camunda.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plagiarism-complains',
  templateUrl: './plagiarism-complains.component.html',
  styleUrls: ['./plagiarism-complains.component.css']
})
export class PlagiarismComplainsComponent implements OnInit {

  tasks: any;
  currUser: any;

  constructor(private camundaService: CamundaService, private router: Router, private authService: AuthService) {
    this.currUser=this.authService.getCurrUser().username;
  }

  ngOnInit(): void {
    const x = this.camundaService.getUserTasks(this.currUser);
    this.tasks = [];
    x.subscribe(
      res => {
        console.log(res);
        for (const i in res){
          if(res[i].name=='Choose editors'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  chooseEditors(task: string) {
    this.router.navigate(['/chooseEditors/' + task]);
  }
}
