import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../services/camunda/camunda.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {
  tasks: any;

  constructor(private camundaService: CamundaService, private router: Router) { }

  ngOnInit(): void {
    const x = this.camundaService.getUserTasks("boardMember1");

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
