import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';
import { RepositoryService } from '../services/repository/repository.service';

@Component({
  selector: 'app-whole-book-requests',
  templateUrl: './whole-book-requests.component.html',
  styleUrls: ['./whole-book-requests.component.css']
})
export class WholeBookRequestsComponent implements OnInit {

  tasks: any;
  currUser: any;

  constructor(private camundaService: CamundaService, private router: Router, private authService: AuthService,
    private repositoryService: RepositoryService) {
      this.currUser=this.authService.getCurrUser().username;
     }

  ngOnInit(): void {
    const x = this.camundaService.getUserTasks(this.currUser);
    console.log(this.currUser);
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
 
  showSubmissionForm(taskId: any) {
    this.router.navigate(['/bookSubmission/' + taskId]);

  }
}
