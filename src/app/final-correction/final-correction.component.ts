import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-final-correction',
  templateUrl: './final-correction.component.html',
  styleUrls: ['./final-correction.component.css']
})
export class FinalCorrectionComponent implements OnInit {

  corrections: any;
  currUser: any;
  private processId: any;

  constructor(private camundaService: CamundaService, private route: ActivatedRoute, private authService: AuthService) {
    this.currUser = this.authService.getCurrUser().username;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      this.corrections = [];
      const x = this.camundaService.getEditorSuggestions(this.processId);
      x.subscribe(
        res => {
          this.corrections = res[0].fieldValue;
        },
        err => {
          console.log('Error occured');
        }
      );
  });
  }

}
