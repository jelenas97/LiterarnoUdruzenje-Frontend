import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-book-submission',
  templateUrl: './book-submission.component.html',
  styleUrls: ['./book-submission.component.css']
})
export class BookSubmissionComponent implements OnInit {

  submissionDetails:any;
  private processId: any;

  constructor(private camundaService: CamundaService, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      this.submissionDetails = [];
      const x = this.camundaService.getSubmissionDetails(this.processId);
      x.subscribe(
        res => {
          this.submissionDetails = res;
          console.log(this.submissionDetails);
        },
        err => {
          console.log('Error occured');
        }
      );
  });
  }

}
