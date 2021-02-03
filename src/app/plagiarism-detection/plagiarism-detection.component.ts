import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';
import { RepositoryService } from '../services/repository/repository.service';

@Component({
  selector: 'app-plagiarism-detection',
  templateUrl: './plagiarism-detection.component.html',
  styleUrls: ['./plagiarism-detection.component.css']
})
export class PlagiarismDetectionComponent implements OnInit {

  tasks: any;
  currUser: any;

  constructor(private camundaService: CamundaService, private router: Router, private authService: AuthService,
    private repositoryService: RepositoryService) {
      this.currUser=this.authService.getCurrUser().username;
     }

  ngOnInit(): void {
    this.tasks= [];
    const x = this.camundaService.getUserTasks(this.currUser);
    x.subscribe(
      res => {
        console.log(res);
        for (const i in res){
          if(res[i].name=='Decision on plagiarism'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }
   
  showPlagiarismDecision(taskId: any) {
    this.router.navigate(['/plagiarismDecision/' + taskId]);

  }

}
