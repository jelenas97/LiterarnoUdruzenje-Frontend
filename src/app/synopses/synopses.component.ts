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

  constructor(private camundaService: CamundaService, private router: Router, private authService: AuthService) {
    this.currUser=this.authService.getCurrUser().username;
   }

  ngOnInit(): void {
    this.tasks= [];
    const x = this.camundaService.getUserTasks(this.currUser);

    x.subscribe(
      res => {
        console.log(res);
        for (const i in res){
          if(res[i].name=='Review the book details'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  synopsisReview(procesId: any) {
    this.router.navigate(['/synopsisReview/' + procesId]);

  }
}
