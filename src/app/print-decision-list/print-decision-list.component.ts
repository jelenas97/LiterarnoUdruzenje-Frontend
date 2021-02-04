import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-print-decision-list',
  templateUrl: './print-decision-list.component.html',
  styleUrls: ['./print-decision-list.component.css']
})
export class PrintDecisionListComponent implements OnInit {

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
          if(res[i].name=='Decide to print or to correct'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  downloadAndDecide(taskId: any) {
    this.router.navigate(['/downloadAndDecide/' + taskId]);

  }
}
