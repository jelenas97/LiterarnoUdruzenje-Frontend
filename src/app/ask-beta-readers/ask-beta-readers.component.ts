import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';
import { RepositoryService } from '../services/repository/repository.service';

@Component({
  selector: 'app-ask-beta-readers',
  templateUrl: './ask-beta-readers.component.html',
  styleUrls: ['./ask-beta-readers.component.css']
})
export class AskBetaReadersComponent implements OnInit {

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
          if(res[i].name=='Decision on sending beta-readers'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
 
}

pickBetaReaders(processId: any) {
  this.router.navigate(['/registrate/' + processId]);

}

}
