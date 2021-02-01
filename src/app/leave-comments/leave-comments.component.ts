import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-leave-comments',
  templateUrl: './leave-comments.component.html',
  styleUrls: ['./leave-comments.component.css']
})
export class LeaveCommentsComponent implements OnInit {

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
          if(res[i].name=='Read and give comment on the book'){
             this.tasks.push(res[i]);
          }
         
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  leaveComment(taskId: any) {
    this.router.navigate(['/downloadAndDecide/' + taskId]);

  }

}
