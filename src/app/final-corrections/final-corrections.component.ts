import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-final-corrections',
  templateUrl: './final-corrections.component.html',
  styleUrls: ['./final-corrections.component.css']
})
export class FinalCorrectionsComponent implements OnInit {

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
          if(res[i].name=='Change the book based on suggestions'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }
   
  correctTheBook(processId: any) {
    this.router.navigate(['/finalCorrections/' + processId]);

  }
}
