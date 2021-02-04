import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-synopsis-review',
  templateUrl: './synopsis-review.component.html',
  styleUrls: ['./synopsis-review.component.css']
})
export class SynopsisReviewComponent implements OnInit {

  synopsisDetails:any;
  private processId: any;

  constructor(private camundaService: CamundaService, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      this.synopsisDetails = [];
      const x = this.camundaService.getSynopsis(this.processId);
      x.subscribe(
        res => {
          this.synopsisDetails = res;
        },
        err => {
          console.log('Error occured');
        }
      );
  });
  }

}
