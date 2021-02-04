import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CamundaService} from '../services/camunda/camunda.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-plagiarism-final-decision',
  templateUrl: './plagiarism-final-decision.component.html',
  styleUrls: ['./plagiarism-final-decision.component.css']
})
export class PlagiarismFinalDecisionComponent implements OnInit {

  notes: any;
  currUser: any;
  private processId: any;

  constructor(private camundaService: CamundaService, private route: ActivatedRoute,
              private router: Router, private authService: AuthService) {
    this.currUser = this.authService.getCurrUser().username;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      this.notes = [];
      const x = this.camundaService.getNotes(this.processId);
      x.subscribe(
        res => {
          console.log(res);
          this.notes = res;
        },
        err => {
          console.log('Error occured');
        }
      );
    });
  }
}
