import { RepositoryService } from './../services/repository/repository.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../services/camunda/camunda.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-plagiarisms',
  templateUrl: './all-plagiarisms.component.html',
  styleUrls: ['./all-plagiarisms.component.css']
})
export class AllPlagiarismsComponent implements OnInit {

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
          if(res[i].name=='Plagiarism decision'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  finalDecision(task: string) {
    this.router.navigate(['/plagiarismFinalDecision/' + task]);
  }
}
