import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../services/camunda/camunda.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {
  tasks: any;
  currUser: any;

  constructor(private camundaService: CamundaService, private router: Router, private authService: AuthService) {
    this.currUser = this.authService.currUser;
  }


  ngOnInit(): void {
    const x = this.camundaService.getUserTasks(this.currUser.username);

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

  review(taskId: any) {
    this.router.navigate(['/reviewRequest/' + taskId]);

  }
}
