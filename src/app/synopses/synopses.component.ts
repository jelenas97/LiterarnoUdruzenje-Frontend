import { RepositoryService } from './../services/repository/repository.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../services/camunda/camunda.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-synopses',
  templateUrl: './synopses.component.html',
  styleUrls: ['./synopses.component.css']
})
export class SynopsesComponent implements OnInit {

  tasks: any;
  currUser: any;
  synopses: any;

  constructor(private camundaService: CamundaService, private router: Router, private authService: AuthService,
     private repositoryService: RepositoryService) {
    this.currUser=this.authService.getCurrUser().username;
   }

  ngOnInit(): void {
    const x = this.camundaService.getUserTasks(this.currUser);

    x.subscribe(
      res => {
        console.log(res);
        this.tasks = res;
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  synopsisReview(taskId: any) {
    this.router.navigate(['/synopsisReview/' + taskId]);

  }
}