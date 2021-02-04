import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-plagiarism-decision',
  templateUrl: './plagiarism-decision.component.html',
  styleUrls: ['./plagiarism-decision.component.css']
})
export class PlagiarismDecisionComponent implements OnInit {
  bookDetails:any;
  plagiarisms:any;
  private processId: any;

  constructor(private camundaService: CamundaService, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      this.bookDetails = [];
      const x = this.camundaService.getBookDetails(this.processId);
      x.subscribe(
        res => {
          this.bookDetails = res;
          this.plagiarisms= res.plagiarisms;
        },
        err => {
          console.log('Error occured');
        }
      );
  });
  }

}
